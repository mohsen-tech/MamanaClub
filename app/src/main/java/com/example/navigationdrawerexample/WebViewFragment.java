package com.example.navigationdrawerexample;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.ProgressDialog;
import android.content.ActivityNotFoundException;
import android.content.ComponentName;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageInfo;
import android.content.res.AssetManager;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import android.net.Uri;
import android.os.Bundle;
//import android.support.v4.app.Fragment;
import android.os.Environment;
import android.os.Parcelable;
import android.provider.MediaStore;
import android.support.v4.view.TouchPoint;
import android.util.Base64;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.Display;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowManager;
import android.webkit.ConsoleMessage;
import android.webkit.JavascriptInterface;
import android.webkit.JsResult;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.widget.Toast;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.RandomAccessFile;
import java.net.URISyntaxException;
import java.util.List;

import android.app.Fragment;


public class WebViewFragment extends Fragment
{
    public final static String TAG = WebViewFragment.class.getSimpleName();
    private WebView browser;
    public String urlp="";

    public WebViewFragment(String url)
    {
        urlp=url;
    }
    public Activity mActivity;

    //public    String TAG = "FileChooserExampleActivity";

    public  final   int REQUEST_CODE = 6384; // onActivityResult request

    public static WebViewFragment newInstance(String url) {
        return new WebViewFragment(url);
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setRetainInstance(true);
        AssetManager am = getResources().getAssets();
        mActivity= getActivity();
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        return inflater.inflate(R.layout.fragment_webview, container, false);
    }

    private final View.OnTouchListener disablingTouchListener = new View.OnTouchListener()
    {
        @Override
        public boolean onTouch(View v, MotionEvent ev) {
            int action1 = ev.getAction();
            switch (action1)
            {
                case MotionEvent.ACTION_DOWN:
                    TouchPoint.d_x=ev.getX();
                    TouchPoint.d_y=ev.getY();
                    TouchPoint.TouchDown();
                    break;
                case MotionEvent.ACTION_MOVE:
                    TouchPoint.m_x=ev.getX();
                    TouchPoint.m_y=ev.getY();
                    TouchPoint.TouchMove();
                    break;
                case MotionEvent.ACTION_UP:
                    TouchPoint.u_x=ev.getX();
                    TouchPoint.u_y=ev.getY();
                    TouchPoint.TouchUp();
                    break;
            }

            return false;
        }
    };
    public void OpenFile(String url)
    {
        OpenUrl("file:///android_asset/"+url);
    }

    public static String OpenUrl_Url="";
    public void OpenUrl(String urlin)
    {
        OpenUrl_Url=urlin;
        browser.setWebViewClient(new WebViewClient() {
            ProgressDialog progressDialog;
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                //view.loadUrl(url);
                return true;
            }
            //slipp
            public void onReceivedError(WebView view, int errorCode, String description, String failingUrl) {
                view.clearView();
                OpenUrl_Url="file:///android_asset/tk_error_connetion.html";
                //browser.loadDataWithBaseURL(OpenUrl_Url, text_html, "text/html", "utf-8", null);
                browser.loadUrl(OpenUrl_Url);//

                //Toast.makeText(getActivity(), description, Toast.LENGTH_LONG).show();
                //view.setVisibility(View.GONE);
            }

            //Show loader on url load
            @Override
            public void onPageStarted(WebView view, String url, Bitmap favicon)
            {
                super.onPageStarted(view, url, favicon);
                if (progressDialog == null) {
                    progressDialog = new ProgressDialog(mActivity);
                    progressDialog.setMessage("Loading...");
                    //progressDialog.show();
                }
            }
            public void onPageFinished(final WebView view, String url) {
                view.postDelayed(new Runnable() {
                    @Override
                    public void run() {
                        //view.evaluateJavascript("document.getElementsByTagName('head')[0].appendChild('<meta name=\"viewport\" content=\"maximum-scale=0\">'); alert('hiii')", null);
                        //scaleChangedRunnablePending = false;
                    }
                }, 100);

                try{
                    if (progressDialog.isShowing()) {
                        progressDialog.dismiss();
                        progressDialog = null;
                    }
                }catch(Exception exception){
                    exception.printStackTrace();
                }
            }
        });


        browser.setWebChromeClient(new WebChromeClient()
        {
//            @Override
//            public boolean onJsAlert(WebView view, final String url, String message,
//                                     JsResult result) {
//
//                AlertDialog.Builder builder = new AlertDialog.Builder(mActivity);
//                builder.setMessage(message)
//                        .setNeutralButton("OK", new  DialogInterface.OnClickListener() {
//                            @Override
//                            public void onClick(DialogInterface arg0, int arg1) {
//                                arg0.dismiss();
//                            }
//                        }).show();
//                result.cancel();
//                return true;
//            }
//
//            @Override
//            public boolean onJsConfirm(WebView view, String url, String message, final JsResult result) {
//
//                new AlertDialog.Builder(mActivity)
//                        .setTitle(" ")
//                        .setMessage(message)
//                        .setPositiveButton(android.R.string.ok,
//                                new DialogInterface.OnClickListener()
//                                {
//                                    public void onClick(DialogInterface dialog, int which)
//                                    {
//                                        result.confirm();
//                                    }
//                                })
//                        .setNegativeButton(android.R.string.cancel,
//                                new DialogInterface.OnClickListener()
//                                {
//                                    public void onClick(DialogInterface dialog, int which)
//                                    {
//                                        result.cancel();
//                                    }
//                                })
//                        .create()
//                        .show();
//
//                return true;
//            }

            // openFileChooser for Android 3.0+
            public void openFileChooser(ValueCallback<Uri> uploadMsg, String acceptType){
                PublicStaticValues.mUploadMessage = uploadMsg;
                try{
                    File imageStorageDir = new File(Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES), "AndroidExampleFolder");
                    if (!imageStorageDir.exists()) {
                        imageStorageDir.mkdirs();
                    }
                    File file = new File(imageStorageDir + File.separator + "IMG_" + String.valueOf(System.currentTimeMillis()) + ".jpg");
                    PublicStaticValues.mCapturedImageURI = Uri.fromFile(file); // save to the private variable
                    final Intent captureIntent = new Intent(android.provider.MediaStore.ACTION_IMAGE_CAPTURE);
                    captureIntent.putExtra(MediaStore.EXTRA_OUTPUT, PublicStaticValues.mCapturedImageURI);
                    // captureIntent.putExtra(MediaStore.EXTRA_SCREEN_ORIENTATION, ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
                    Intent i = new Intent(Intent.ACTION_GET_CONTENT);
                    i.addCategory(Intent.CATEGORY_OPENABLE);
                    i.setType("image/*");

                    Intent chooserIntent = Intent.createChooser(i, "Image Chooser");
                    chooserIntent.putExtra(Intent.EXTRA_INITIAL_INTENTS, new Parcelable[] { captureIntent });

                    startActivityForResult(chooserIntent, PublicStaticValues.FILECHOOSER_RESULTCODE);
                }
                catch(Exception e){
                    e=e;
                    //Toast.makeText(getBaseContext(), "Camera Exception:"+e, Toast.LENGTH_LONG).show();
                }
            }
            // openFileChooser for Android < 3.0
            public void openFileChooser(ValueCallback<Uri> uploadMsg){
                openFileChooser(uploadMsg, "");
            }
            //openFileChooser for other Android versions
            public void openFileChooser(ValueCallback<Uri> uploadMsg, String acceptType, String capture) {
                openFileChooser(uploadMsg, acceptType);
            }
            //The webPage has 2 filechoosers and will send a console message informing what action to perform, taking a photo or updating the file
            public boolean onConsoleMessage(ConsoleMessage cm) {
                onConsoleMessage(cm.message(), cm.lineNumber(), cm.sourceId());
                //Toast.makeText(getBaseContext(), cm.message()+" :message", Toast.LENGTH_LONG).show();
                return true;
            }
            public void onConsoleMessage(String message, int lineNumber, String sourceID) {
                //Log.d("androidruntime", "Per c?nsola: " + message);
                //Toast.makeText(getBaseContext(), message+":message", Toast.LENGTH_LONG).show();
                //if(message.endsWith("foto")){ boolFileChooser= true; }
                //else if(message.endsWith("pujada")){ boolFileChooser= false; }
            }
        });

        WebSettings settings = browser.getSettings();
        settings.setJavaScriptEnabled(true);

        settings.setLoadsImagesAutomatically(true);
        settings.setLoadWithOverviewMode(true);
        settings.setSupportMultipleWindows(false);
        settings.setJavaScriptCanOpenWindowsAutomatically(false);
        settings.setUseWideViewPort(false);
        settings.setBuiltInZoomControls(false);
        settings.setSupportZoom(false );
        settings.setAllowContentAccess(true);
        settings.setAllowFileAccess(true);
        settings.setAllowContentAccess(true);
        settings.setAllowFileAccessFromFileURLs(true);
        settings.setAllowUniversalAccessFromFileURLs(true);
        settings.setAppCacheEnabled(true);

        settings.setDefaultZoom(WebSettings.ZoomDensity.FAR);
        settings.setDomStorageEnabled(true);
        settings.setAppCacheMaxSize(1024*1024*8);
        settings.setAppCachePath("/data/data/"+  getActivity().getPackageName() +"/cache");
        settings.setAllowFileAccess(true);
        settings.setAppCacheEnabled(true);
        settings.setCacheMode(WebSettings.LOAD_DEFAULT);
//
//        browser.requestFocus(View.FOCUS_DOWN);
//        browser.setScrollBarStyle(View.SCROLLBARS_INSIDE_OVERLAY);
//        browser.setVerticalScrollBarEnabled(false);
//        browser.setHorizontalScrollBarEnabled(false);
//        browser.setScrollContainer(false);



        browser.addJavascriptInterface(new JSInterface(browser), "JSInterface");

        browser.getSettings().setLayoutAlgorithm(WebSettings.LayoutAlgorithm.SINGLE_COLUMN);
//        browser.setScrollContainer(false);
//        browser.setVerticalScrollBarEnabled(false);
//        browser.setHorizontalScrollBarEnabled(false);
//
//        browser.setHorizontalScrollBarEnabled(false);
        browser.setOnTouchListener(new View.OnTouchListener() {
            float m_downX=1;
            public boolean onTouch(View v, MotionEvent event) {
                switch (event.getAction()) {
                    case MotionEvent.ACTION_DOWN: {
                        m_downX = event.getX();
                    }
                    break;
                    case MotionEvent.ACTION_MOVE:
                    case MotionEvent.ACTION_CANCEL:
                    case MotionEvent.ACTION_UP: {
                        event.setLocation(m_downX, event.getY());
                    }
                    break;
                }
                return false;
            }
        });

        if(!(OpenUrl_Url.contains("http")||OpenUrl_Url.contains("www.")))
        {
            String text_html = "";
            try {
                String uurl = OpenUrl_Url.replace("file:///android_asset/", "");
                int sharp=uurl.indexOf("#");
                if(sharp>1) {
                    uurl = uurl.substring(0, sharp);
                }
                AssetManager am = getResources().getAssets();
                InputStream is = am.open(uurl);
                int size = is.available();
                byte[] buffer = new byte[size];
                is.read(buffer);
                is.close();
                text_html = new String(buffer);
            } catch (IOException e) {
                ///throw new RuntimeException(e);
                text_html= "<body>Error Not Find File Object "+OpenUrl_Url+"</body>";
            }

            DisplayMetrics metrics = getResources().getDisplayMetrics();
//
//            text_html = ReplaceAllStr(text_html, "330px/*@screen_width_30px*/", Integer.toString(metrics.widthPixels / 2 - 30) + "px");
//            text_html = ReplaceAllStr(text_html, "610px/*@screen_height_30px*/", Integer.toString(metrics.heightPixels / 2 - 30) + "px");
//            text_html = ReplaceAllStr(text_html, "360px/*@screen_width*/", Integer.toString(metrics.widthPixels / 2) + "px");
//            text_html = ReplaceAllStr(text_html, "640px/*@screen_height*/", Integer.toString(metrics.heightPixels / 2) + "px");
            text_html = ReplaceAllStr(text_html, ".///", "file:///android_asset/");
            browser.loadDataWithBaseURL( "file:///android_asset/"+OpenUrl_Url, text_html, "text/html", "utf-8", null);
        }
        else {
            browser.loadUrl(OpenUrl_Url);
        }
    }


    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        switch (requestCode) {
            case REQUEST_CODE:
                // If the file selection was successful
                if (resultCode ==Activity.RESULT_OK) {
                    if (data != null) {
                        final Uri uri = data.getData();
                        try {
                            final String path = ul.getPath(PublicStaticValues.mContext, uri);

                            File file = new File(path);
                            FileInputStream fin = null;
                            fin = new FileInputStream(file);

                            byte fileContent[] = new byte[(int)file.length()];
                            fin.read(fileContent);
                            PublicStaticValues.BufferChooseFile=fileContent;
                        }
                        catch (FileNotFoundException e) {
                            System.out.println("File not found" + e);
                        }
                        catch (IOException ioe) {
                            System.out.println("Exception while reading file " + ioe);
                        }
                    }
                }
                break;

            case 2888:
                // If the file selection was successful
                if (resultCode ==Activity.RESULT_OK) {
                    if (data != null) {
                        final Uri uri = data.getData();
                        try {
                            final String path = ul.getPath(PublicStaticValues.mContext, uri);

                            File file = new File(path);
                            FileInputStream fin = null;
                            fin = new FileInputStream(file);

                            byte fileContent[] = new byte[(int)file.length()];
                            fin.read(fileContent);
                            PublicStaticValues.BufferChooseFile=fileContent;
                        }
                        catch (FileNotFoundException e) {
                            System.out.println("File not found" + e);
                        }
                        catch (IOException ioe) {
                            System.out.println("Exception while reading file " + ioe);
                        }
                    }
                }
                break;
        }
        super.onActivityResult(requestCode, resultCode, data);
    }


//
//    public  String getPath(Context context, Uri uri)  {
//        if ("content".equalsIgnoreCase(uri.getScheme())) {
//            String[] projection = { "_data" };
//            Cursor cursor = null;
//
//            try {
//                cursor = context.getContentResolver().query(uri, projection, null, null, null);
//                int column_index = cursor.getColumnIndexOrThrow("_data");
//                if (cursor.moveToFirst()) {
//                    return cursor.getString(column_index);
//                }
//            } catch (Exception e)
//            {
//                // Eat it
//                e=e;
//            }
//        }
//        else if ("file".equalsIgnoreCase(uri.getScheme())) {
//            return uri.getPath();
//        }
//
//        return null;
//    }
//



    public String ReplaceAllStr(String src,String old,String neww){
        while(src.indexOf(old)!=-1)
            src=src.replace(old, neww);
        return src;
    }

    public class JSInterface
    {
        private WebView mAppView;
        public byte[] test11;


        @JavascriptInterface
        public int ConfirmT(String Title,String Message,final String JsYes,final String JsNo,final String CMD)
        {
            new AlertDialog.Builder(PublicStaticValues.mContext)
                    .setIcon(android.R.drawable.ic_dialog_alert)
                    .setTitle(Title)
                    .setMessage(Message)
                    .setPositiveButton("بلی", new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog, int which) {
                            if(JsYes.length()>1) {
                                if(CMD.contains("OpenChrome"))
                                    OpenChrome(JsYes);
                                else
                                    PublicStaticValues.newpage=JsYes;
                            }
                        }
                    })
                    .setNegativeButton("خیر", new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog, int which) {
                            if(JsNo.length()>1){
                                if(CMD.contains("OpenChrome"))
                                    OpenChrome(JsNo);
                                else
                                    PublicStaticValues.newpage=JsNo;
                            }
                        }
                    })
                    .show();
            return  0;
        }

        @JavascriptInterface
        public void SelectItem(String val)
        {
            PublicStaticValues.newSelectItem=val;
        }

        @JavascriptInterface
        public int Width()
        {
            DisplayMetrics metrics = getResources().getDisplayMetrics();
            return  metrics.widthPixels;
        }

        @JavascriptInterface
        public int Height()
        {
            DisplayMetrics metrics = getResources().getDisplayMetrics();
            return  metrics.heightPixels;
        }

        @JavascriptInterface
        public int GetVerNumber() {
            int versionCode = BuildConfig.VERSION_CODE;
            String versionName = BuildConfig.VERSION_NAME;
            return versionCode;
        }

        private static final int FILE_SELECT_CODE = 0;

        public Intent createGetContentIntent() {
            final Intent intent = new Intent(Intent.ACTION_GET_CONTENT);
            intent.setType("*/*");
            intent.addCategory(Intent.CATEGORY_OPENABLE);
            return intent;
        }

        @JavascriptInterface
        public void ShowFileChooser() {
            Intent target = createGetContentIntent();
            Intent intent = Intent.createChooser(
                    target, "");
            try {
                startActivityForResult(intent, REQUEST_CODE);
            } catch (ActivityNotFoundException e) {
            }
        }


        @JavascriptInterface
        public String GetVerName() {
            String versionName = BuildConfig.VERSION_NAME;
            return  versionName;
        }

        @JavascriptInterface
        public String UpWin(String v)
        {
            return PublicStaticValues.frameMsg = v;
        }

        @JavascriptInterface
        public void NewPage(String val) {
            PublicStaticValues.newpage=val;
        }

        @JavascriptInterface
        public void OpenNav() {
            PublicStaticValues.OpenNav=1;
        }

        @JavascriptInterface
        public void ExeFunc(int val){
            PublicStaticValues.ExecuteFunction=val;
        }

        @JavascriptInterface
        public boolean IsEmptyDV(String id)
        {
            SharedPreferences settings =PublicStaticValues.mContext.getSharedPreferences("UserInfo", 0);
            String str=settings.getString(id, "").toString();
            return ((str==null) || (str.length()==0)||((str.contains("NaN"))&&(str.length()==3)));// !Strings.isNullOrEmpty(settings.getString(id, "").toString());
        }





        @JavascriptInterface
        public String GetDV(String id)
        {
            SharedPreferences settings =PublicStaticValues.mContext.getSharedPreferences("UserInfo", 0);
            return settings.getString(id, "").toString();

        }

        @JavascriptInterface
        public void SetDV(String id,String val)
        {
            SharedPreferences settings =PublicStaticValues.mContext.getSharedPreferences("UserInfo", 0);
            SharedPreferences.Editor editor = settings.edit();
            editor.putString(id,val);
            editor.commit();
        }

        @JavascriptInterface
        public void OpenChrome(String url) {
            try {
                Intent i = new Intent("android.intent.action.MAIN");
                i.setComponent(ComponentName.unflattenFromString("com.android.chrome/com.android.chrome.Main"));
                i.addCategory("android.intent.category.LAUNCHER");
                i.setData(Uri.parse(url));
                startActivity(i);
            }
            catch(ActivityNotFoundException e) {
                Intent i = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                startActivity(i);
            }
        }

        @JavascriptInterface
        public void GetBufferClear() {
            PublicStaticValues.BufferChooseFile=null;
        }

        @JavascriptInterface
        public String GetBufferValueBase64() {
            if(PublicStaticValues.BufferChooseFile!=null)
                return (new String(Base64.encodeToString(PublicStaticValues.BufferChooseFile, 0)));
            return "";
        }

        @JavascriptInterface
        public String GetBufferImage() {
            if(PublicStaticValues.BufferChooseFile!=null)
            {
                String t ="data:image/png;base64," +(new String(Base64.encodeToString(PublicStaticValues.BufferChooseFile, 0)));
                return t;
            }
            return "";
        }

        public JSInterface(WebView appView)
        {
            this.mAppView = appView;
        }

        @JavascriptInterface
        public String GetUrlConnect(){
            return PublicStaticValues.lastpage;
        }


        @JavascriptInterface
        public boolean Dial(String tel)
        {
            Intent intent = new Intent(Intent.ACTION_DIAL);
            intent.setData(Uri.parse("tel:"+tel));
            startActivity(intent);
            return true;
        }


        @JavascriptInterface
        public int DialogTell(String Title,String Message,final String tell)
        {
            new AlertDialog.Builder(PublicStaticValues.mContext)
                    .setIcon(android.R.drawable.ic_menu_call)
                    .setTitle(Title)
                    .setMessage(Message)
                    .setPositiveButton("SMS", new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog, int which) {
                            Sms(tell);
                        }
                    })
                    .setNegativeButton("Dail", new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog, int which) {
                            Dial(tell);
                        }
                    })
                    .show();
            return  0;
        }


        @JavascriptInterface
        public boolean Sms(String tel)
        {
            Intent intent = new Intent(Intent.ACTION_SENDTO);
            intent.setData(Uri.parse("smsto:" + Uri.encode(tel)));
            startActivity(intent);
            return true;
        }
        @JavascriptInterface
        public boolean Email(String email)
        {
            Intent intent = new Intent(Intent.ACTION_MAIN);
            intent.addCategory(Intent.CATEGORY_APP_EMAIL);
            startActivity(intent);
            startActivity(Intent.createChooser(intent, email));
            return true;
        }

        @JavascriptInterface
        public String GetUrl(){
            return PublicStaticValues.newpage;
        }

        @JavascriptInterface
        public void Alert(String echo){
            ul.Alert(echo);
        }

        @JavascriptInterface
        public int GetOrientation(){
            Display display = ((WindowManager) getActivity().getSystemService(Context.WINDOW_SERVICE)).getDefaultDisplay();
            int orientation = display.getOrientation();
            return orientation;
        }

        @JavascriptInterface
        public String getInstalledApps(boolean showImage) {
            boolean getSysPackages=false;
            JSONArray ja=new JSONArray();

            AssetManager am = getResources().getAssets();

            List<PackageInfo> packs = getActivity().getPackageManager().getInstalledPackages(0);
            for(int i=0;i<packs.size();i++)
            {
                PackageInfo p = packs.get(i);
                if ((!getSysPackages) && (p.versionName == null)) continue ;

                try
                {
                    JSONObject pnObj = new JSONObject();
                    if ((p.applicationInfo.flags & ApplicationInfo.FLAG_SYSTEM) == 0)
                    {
                        pnObj.put("appname", p.applicationInfo.loadLabel(getActivity().getPackageManager()).toString());
                        pnObj.put("versionName", p.versionName);
                        pnObj.put("versionCode", p.versionCode);

                        if(showImage) {
                            Drawable d = p.applicationInfo.loadIcon(getActivity().getPackageManager());
                            Bitmap bitmap = ((BitmapDrawable) d).getBitmap();
                            ByteArrayOutputStream stream = new ByteArrayOutputStream();
                            bitmap.compress(Bitmap.CompressFormat.PNG, 100, stream);
                            byte[] bitmapdata = stream.toByteArray();
                            String strDataIcon = "data:image/png;base64," + (new String(Base64.encodeToString(bitmapdata, 0)));
                            pnObj.put("bitmap", strDataIcon);
                            test11 = bitmapdata;
                        }
                        ja.put(pnObj);
                    }
                }catch(JSONException e){}
            }
            return ja.toString();
        }
    }

    @Override
    public void onViewCreated(View view, Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);

        browser = (WebView) view.findViewById(R.id.webView);
        OpenUrl(urlp);
        // browser.setOnTouchListener(this.disablingTouchListener);

        //webView.onTouchEvent()
                /*

                  int action1 = ev.getAction();
        switch (action1) {
            case MotionEvent.ACTION_DOWN:
                TouchPoint.d_x=ev.getX();
                TouchPoint.d_y=ev.getY();
                TouchPoint.TouchDown();
                break;
            case MotionEvent.ACTION_MOVE:
                TouchPoint.m_x=ev.getX();
                TouchPoint.m_y=ev.getY();
                TouchPoint.TouchMove();
                break;
            case MotionEvent.ACTION_UP:
                TouchPoint.u_x=ev.getX();
                TouchPoint.u_y=ev.getY();
                TouchPoint.TouchUp();
                break;
        }
                 */
    }
}
