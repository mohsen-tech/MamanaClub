package com.example.navigationdrawerexample;

import android.annotation.TargetApi;
import android.app.Activity;
import android.app.AlertDialog;
import android.app.Fragment;
import android.app.FragmentManager;
import android.content.ActivityNotFoundException;
import android.content.ComponentName;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.graphics.Typeface;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.ContextThemeWrapper;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.webkit.WebView;
import android.widget.AdapterView;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.ListView;
import android.widget.ScrollView;
import android.widget.TextView;

//import android.support.v4.app.ActionBarDrawerToggle;
//import android.support.v7.widget.DrawerLayout;
//import android.support.v7.widget.DrawerLayout;


public class MainActivity extends Activity
{
    private FrameLayout mFrameLayout;
    ObjectDrawerItem[] drawerItemNav;
    private String[] mNavigationdrawerItemNavTitles;
    private DrawerLayout mDrawerLayout;
    private ListView mDrawerList;

    private ActionBarDrawerToggle mDrawerToggle;
    private CharSequence mDrawerTitle;
    private CharSequence mTitle;
    UITimer timerWeb;
    private SharedPreferences settings;
    private SharedPreferences.Editor SpEditor;

    public void ReplaceFragment(Fragment fragmentNow,int mId)
    {
        FragmentManager fragmentManager = getFragmentManager();
        fragmentManager.beginTransaction().replace(mId, fragmentNow).commit();
    }

	@TargetApi(Build.VERSION_CODES.JELLY_BEAN_MR1)
    @Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
        //setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);//only PORTRAIT
        //setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE);//only PORTRAIT
        getWindow().getDecorView().setLayoutDirection(View.LAYOUT_DIRECTION_RTL);
		setContentView(R.layout.activity_main);

/*
        Sp=getApplicationContext().getSharedPreferences("log",0);

        if(Sp.getInt("log",0)==0)
            ////
            ;

        SpEditor=Sp.edit();
        SpEditor.putString("user",user.name.toString());
        SpEditor.putInt("log",1);
        SpEditor.commit();
*/

        mFrameLayout = (FrameLayout) findViewById(R.id.content_frameMsg);
        PublicStaticValues.mContext=this;
        PublicStaticValues.mActivity=this;




        DisplayMetrics metrics = new DisplayMetrics();
        this.getWindowManager().getDefaultDisplay().getMetrics(metrics);
        float yInches = (metrics.heightPixels / metrics.ydpi)*(2/metrics.density-2);
        float xInches = (metrics.widthPixels / metrics.xdpi)*(2/metrics.density-2);
        double diagonalInches = Math.sqrt(xInches * xInches + yInches * yInches);

        //ul.Alert("diagonalInches: "+ diagonalInches);

        int dpi = getResources().getDisplayMetrics().densityDpi;
        int size_header=34;
        int top_padding=12;

//        if((diagonalInches>6)&&(metrics.ydpi<=320))
//        {
//            size_header=53;
//            top_padding=24;
//        }


        FrameLayout content_frame = (FrameLayout)findViewById(R.id.content_frame);
        content_frame.setPadding(0,top_padding,0,0);
        ReplaceFragment(WebViewFragment.newInstance("actionbar.html#size="+size_header),R.id.ActionBarTools);


		mTitle = mDrawerTitle = getTitle();


		mNavigationdrawerItemNavTitles = getResources().getStringArray(R.array.navigation_drawer_items_array);
        mDrawerLayout = (DrawerLayout)findViewById(R.id.drawer_layout);
        mDrawerList = (ListView) findViewById(R.id.left_drawer);

        ListNevCreate();


        ListNevLoginLogout();


        mDrawerLayout = (DrawerLayout) findViewById(R.id.drawer_layout);


        mDrawerToggle = new ActionBarDrawerToggle(
                this,                  /* host Activity */
                mDrawerLayout,         /* DrawerLayout object */
                R.string.drawer_open,  /* "open drawer" description */
                R.string.drawer_close  /* "close drawer" description */
        ) { };

        // Set the drawer toggle as the DrawerListener
        mDrawerLayout.setDrawerListener(mDrawerToggle);

        // enable ActionBar app icon to behave as action to toggle nav drawer
        getActionBar().setDisplayHomeAsUpEnabled(false);
        getActionBar().setHomeButtonEnabled(true);
        getActionBar().setDisplayShowTitleEnabled(false);
        getActionBar().hide();


        if (savedInstanceState == null) {
            // on first time display view for first nav item
            SelectItem("home");
        }

        Handler uiHandlerWeb = new Handler();
        Runnable runMethodWeb = new Runnable(){
            public void run()
            {
                if(PublicStaticValues.newSelectItem.length()>0)
                {
                    if(PublicStaticValues.newSelectItem!=PublicStaticValues.oldSelectItem)
                    {
                        PublicStaticValues.oldSelectItem=PublicStaticValues.newSelectItem;
                        SelectItem(PublicStaticValues.newSelectItem);
                    }
                }


                if(PublicStaticValues.frameMsg.length()>0)
                {
                    if(PublicStaticValues.frameMsg_tmp!=PublicStaticValues.frameMsg) {
                        PublicStaticValues.frameMsg_tmp=PublicStaticValues.frameMsg;
                        WebView webMsg = (WebView) findViewById(R.id.webMsg);
                        webMsg.loadUrl("file:///android_asset/" + PublicStaticValues.frameMsg);
                        webMsg.getLayoutParams().width= (int)(getWindowManager().getDefaultDisplay().getWidth()*0.3);
                        webMsg.getLayoutParams().height= (int)(getWindowManager().getDefaultDisplay().getHeight()*0.1);
                        webMsg.requestLayout();
                        mFrameLayout.setVisibility(View.VISIBLE);
                    }
                }
                else
                {
                    mFrameLayout.setVisibility(View.GONE);
                }

                if(!PublicStaticValues.oldpage.equalsIgnoreCase(PublicStaticValues.newpage))
                {
                    PublicStaticValues.oldpage=PublicStaticValues.newpage;
                    if((PublicStaticValues.newpage.length()>0)&&(!PublicStaticValues.newpage.contains("tk_error_connetion.html")))
                        PublicStaticValues.lastpage=PublicStaticValues.newpage;
                    if(PublicStaticValues.newpage=="")return;

                    if(!PublicStaticValues.newpage.contains("#home&"))
                        exit_program_number=0;

                    selectPage(PublicStaticValues.newpage);
                    PublicStaticValues.spages.push(PublicStaticValues.newpage);
                }

                if(PublicStaticValues.OpenNav==1)
                {
                    PublicStaticValues.OpenNav=0;
                    mDrawerLayout.openDrawer(mDrawerList);
                }

                if(PublicStaticValues.ExecuteFunction!=0)
                {
                    if(PublicStaticValues.ExecuteFunction==1)
                    {
                        PublicStaticValues.ExecuteFunction = 0;
                        ListNevLoginLogout();

                    }
                }
            }

        };
        timerWeb = new UITimer(uiHandlerWeb, runMethodWeb, 1);
        timerWeb.start();

        SelectItem("home");
	}



    int exit_program_number=0;
    @Override
    public void onBackPressed()
    {
        /*if(exit_program_number==0) {
            SelectItem("home");
            ul.Alert("برای بستن برنامه مجدد کلید نمایید");
            exit_program_number=1;
        }
        else
        {*/
            final ScrollView s_view = new ScrollView(getApplicationContext());
        s_view.setBackgroundColor(Color.TRANSPARENT);
        final TextView t_view = new TextView(getApplicationContext());
            t_view.setText("آیا مایل به خروج از برنامه هستید؟");
            t_view.setTextSize(17);
            t_view.setTextColor(Color.parseColor("#6ed1bf"));
            t_view.setPadding(20, 10, 20, 10);
            t_view.setTypeface(Typeface.createFromAsset(PublicStaticValues.mActivity.getAssets(), "fonts/byekan.otf"));
            s_view.addView(t_view);

        AlertDialog.Builder customBuilder = new AlertDialog.Builder(new ContextThemeWrapper(this,android.R.style.Theme_Dialog));

        customBuilder.setIcon(R.drawable.logo2020small);

        customBuilder.setTitle("بستن برنامه");
        customBuilder  .setView(s_view);
        customBuilder .setPositiveButton("بلی", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                System.exit(0);
                android.os.Process.killProcess(android.os.Process.myPid());
                System.exit(1);
                finish();
                Intent intent = new Intent(Intent.ACTION_MAIN);
                intent.addCategory(Intent.CATEGORY_HOME);
                intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                startActivity(intent);
            }
        });
        customBuilder  .setNegativeButton("خیر", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                exit_program_number = 0;
            }
        });
        AlertDialog dialog = customBuilder.create();
        dialog.show();

        Button negative = dialog.getButton(DialogInterface.BUTTON_NEGATIVE);
        Button positive = dialog.getButton(DialogInterface.BUTTON_POSITIVE);
        negative.setTextColor(Color.parseColor("#6ed1bf"));
        positive.setTextColor(Color.parseColor("#6ed1bf"));

        positive.setTextSize(17);
        negative.setTextSize(17);
        negative.setTypeface(Typeface.createFromAsset(PublicStaticValues.mActivity.getAssets(), "fonts/byekan.otf"));
        positive.setTypeface(Typeface.createFromAsset(PublicStaticValues.mActivity.getAssets(), "fonts/byekan.otf"));
        //}


    }

    @Override
	public boolean onCreateOptionsMenu(Menu menu)
    {
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}


	@Override
	public boolean onOptionsItemSelected(MenuItem item)
    {
       if (mDrawerToggle.onOptionsItemSelected(item)){
           return true;
       }
       return super.onOptionsItemSelected(item);
	}


    @Override
    protected void onPostCreate(Bundle savedInstanceState) {
        super.onPostCreate(savedInstanceState);
        mDrawerToggle.syncState();
    }


    public String GetDV(String id)
    {
        SharedPreferences settings =PublicStaticValues.mContext.getSharedPreferences("UserInfo", 0);
        return settings.getString(id, "").toString();
    }

    public boolean IsEmptyDV(String id)
    {
        settings =PublicStaticValues.mContext.getSharedPreferences("UserInfo", 0);
        String str=settings.getString(id, "").toString();
        return ((str==null) || (str.length()==0)||((str.contains("NaN"))&&(str.length()==3)));// !Strings.isNullOrEmpty(settings.getString(id, "").toString());
    }

    public void SetDV(String id,String val)
    {
        SharedPreferences settings =PublicStaticValues.mContext.getSharedPreferences("UserInfo", 0);
        SharedPreferences.Editor editor = settings.edit();
        editor.putString(id,val);
        editor.commit();
    }

    public void ListNevLoginLogout()
    {
        if (IsEmptyDV("nameuser")) {
            ListNav_Set_Name(lngi("nprofile"), "ورود");
            ListNav_Set_Hide(lngi("nprofile2"), true);
            ListNav_Set_Hide(lngi("exit"), true);
            ListNav_Set_Hide(lngi("join"), false);
        }
        else {
            ListNav_Set_Name(lngi("nprofile"), GetDV("nameuser"));
            ListNav_Set_Hide(lngi("nprofile2"), false);
            ListNav_Set_Hide(lngi("exit"), false);
            ListNav_Set_Hide(lngi("join"), true);
        }
    }



    public void ListNavRefresh()
    {
        DrawerItemCustomAdapter adapter = new DrawerItemCustomAdapter(this, R.layout.listview_item_row, drawerItemNav);
        mDrawerList.setAdapter(adapter);
        mDrawerList.setOnItemClickListener(new drawerItemNavClickListener());
    }

    public int lngi(String codem)
    {
        for(int i=0;i<mDrawerList.getAdapter().getCount();i++)
          if((((DrawerItemCustomAdapter)mDrawerList.getAdapter()).getItem(i).code).equalsIgnoreCase(codem))
              return i;

        ul.Alert("Error ListNav_Get_Code: " + codem);
        return -1;
    }

    public String ListNav_Get_Code(int position)
    {
        return ((DrawerItemCustomAdapter)mDrawerList.getAdapter()).getItem(position).code;
    }
    public void ListNav_Set_Code(int position,String Value)
    {
        ((DrawerItemCustomAdapter)mDrawerList.getAdapter()).getItem(position).code=Value;
    }

    public boolean ListNav_Get_Hide(int position)
    {
        return ((DrawerItemCustomAdapter)mDrawerList.getAdapter()).getItem(position).hide;
    }
    public void ListNav_Set_Hide(int position,boolean Value)
    {
        ((DrawerItemCustomAdapter)mDrawerList.getAdapter()).getItem(position).hide=Value;
        ListNavRefresh();
    }

    public String ListNav_Get_Name(int position)
    {
        return ((DrawerItemCustomAdapter)mDrawerList.getAdapter()).getItem(position).name;
    }

    public void ListNav_Set_Name(int position,String Value)
    {
        ((DrawerItemCustomAdapter)mDrawerList.getAdapter()).getItem(position).name=Value;
        ListNavRefresh();
    }


    private class drawerItemNavClickListener implements ListView.OnItemClickListener {
        @Override
        public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
            SelectItem((((DrawerItemCustomAdapter) mDrawerList.getAdapter()).getItem(position).code));
        }
    }

    public void ListNevCreate(){
        int i=0;
        drawerItemNav= new ObjectDrawerItem[30];

        drawerItemNav[i++] = new ObjectDrawerItem(R.drawable.sm_ic_home, "خانه","home",false);
        drawerItemNav[i++] = new ObjectDrawerItem(R.drawable.sm_ic_logout,"منوی کاربری","nprofile",false);
        drawerItemNav[i++] = new ObjectDrawerItem(R.drawable.sm_ic_login,"عضویت","join",false);
        drawerItemNav[i++] = new ObjectDrawerItem(R.drawable.sm_ic_mynetbarg, "منوی فروشندگان","nprofile2",false);
        drawerItemNav[i++] = new ObjectDrawerItem(R.drawable.sm_ic_bookmark, "علاقه مندی ها","favorite",false);
        drawerItemNav[i++] = new ObjectDrawerItem(R.drawable.sm_ic_city, "انتخاب شهر","select city",false);
        drawerItemNav[i++] = new ObjectDrawerItem(R.drawable.sm_ic_category, " دسته بندی تخفیف ها","select cat",false);
        drawerItemNav[i++] = new ObjectDrawerItem(R.drawable.aboutus, "با مامانا کلاب آشنا شوید","about",false);
        drawerItemNav[i++] = new ObjectDrawerItem(R.drawable.article, "مقالات","article",false);
        drawerItemNav[i++] = new ObjectDrawerItem(R.drawable.telegram, "کانال تلگرام","social network",false);
        drawerItemNav[i++] = new ObjectDrawerItem(R.drawable.callus, "ارتباط با ما","ContactUs",false);
    //    drawerItemNav[i++] = new ObjectDrawerItem(R.drawable.sm_ic_bullet, "اطلاعات تماس","contact the",false);
        drawerItemNav[i++] = new ObjectDrawerItem(R.drawable.share, "اشتراک تخفیف نامه","share news",false);
//        drawerItemNav[i++] = new ObjectDrawerItem(R.drawable.sm_ic_bullet, "قوانین و مقررات","rules",false);
        drawerItemNav[i++] = new ObjectDrawerItem(R.drawable.sm_ic_logout, "خروج","exit",false);


        ObjectDrawerItem[] tmps= new ObjectDrawerItem[i];
        System.arraycopy(drawerItemNav,0,tmps,0,i);drawerItemNav=tmps;
        ListNavRefresh();
    }

    private void SelectItem(String code)
    {
        Fragment fragment = null;
        switch (code) {
            case "home"://خانه
                //startActivity(new Intent(Settings.ACTION_LOCATION_SOURCE_SETTINGS));
                String Addres="";
                if(IsEmptyDV("city"))
                    Addres="#home&city=مشهد";
                else
                    Addres="#home&city="+GetDV("city");

                PublicStaticValues.newpage="tk_prods.html"+Addres;
                SetDV("citylocation","");
                break;
            case "nprofile"://ورود
                if(!IsEmptyDV("id"))
                    PublicStaticValues.newpage="http://www.mamanaclub.com/MobilePage/Mobile_Profile.aspx?usrId="+GetDV("id");
                else
                    PublicStaticValues.newpage="tk_login.html";
                break;
            case "join":
                /*settings =PublicStaticValues.mContext.getSharedPreferences("UserInfo", 0);
                String str=settings.getString(id, "").toString();
                */
					PublicStaticValues.newpage="http://www.mamanaclub.com/mobilepage/Mobile_joinmamana.aspx";
                break;
            case "nprofile2":// پروفایل فروشندگان
                if(!IsEmptyDV("id"))
                {
                    String ut=GetDV("ut");
                    if (ut.contains("7"))
                        PublicStaticValues.newpage = "http://www.mamanaclub.com/MobilePage/Mobile_AdminProfile.aspx?usrId=" + GetDV("id");
                    else
                        ul.Alert("دسترسی محدود");
                }else
                    PublicStaticValues.newpage="tk_login.html";
                SetDV("citylocation","");

                break;
            case "favorite"://علاقه مندی ها
                if(!IsEmptyDV("id"))
                    PublicStaticValues.newpage="tk_prods.html#usrid="+GetDV("id");
                else
                    PublicStaticValues.newpage="tk_login.html";
                SetDV("citylocation","");

                break;
            case "select city"://انتخاب شهر
                PublicStaticValues.newpage= "tk_pcats_city.html#Start=1";
                SetDV("citylocation","");
                break;
            case "select cat"://انتخاب دسته بندی
                PublicStaticValues.newpage= "tk_pcats.html";
                SetDV("citylocation","");
                break;
            case "exit"://خروج1
                new AlertDialog.Builder(this)
                    .setIcon(R.drawable.hand_cursor_filled)
                    .setTitle("بستن برنامه")
                    .setMessage("آیا مایل به خروج از حساب کاربری خود هستید؟")
                    .setPositiveButton("بلی", new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog, int which) {
                            SetDV("id", "");
                            SetDV("nameuser", "");
                            SetDV("ut", "");
                            ListNevLoginLogout();
                            ul.Alert("خروج");
                        }
                    })
                    .setNegativeButton("خیر", new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog, int which) {
                        }
                    })
                    .show();
                SetDV("citylocation","");
                break;
            case "about"://درباره ما
                //OpenChrome("http://www.takhfif2020.ir/Content/AboutUs/%D8%AF%D8%B1%D8%A8%D8%A7%D8%B1%D9%87%20%D9%85%D8%A7.aspx");
                SetDV("citylocation","");
                PublicStaticValues.newpage="tk_information_items.html#m=1&pid=AboutUs";
                break;
            case "article"://اظلاعیه ها
                //OpenChrome("http://www.takhfif2020.ir/Information/default.aspx");
                PublicStaticValues.newpage="index.html#list=0";

                break;
            case "share news"://اشتراک در خبرنامه
                PublicStaticValues.newpage="tk_feedburner.html";
                SetDV("citylocation","");
                break;
            case "rules"://قوانین و مقررات
                //OpenChrome("http://www.takhfif2020.ir/Content/InfoRegister/%D8%B1%D8%A7%D9%87%D9%86%D9%85%D8%A7%DB%8C-%D8%B9%D8%B6%D9%88%DB%8C%D8%AA-140.aspx");
                PublicStaticValues.newpage="tk_information_items.html#m=1&pid=InfoRegister";
                SetDV("citylocation","");
                break;
            case "social network"://شبکه های اجتماعی
                Intent telegram = new Intent(Intent.ACTION_VIEW , Uri.parse("telegram.me/joinchat/BX8O1j1VWBJ6P4ZfcqPftQ"));
                startActivity(telegram);
                //PublicStaticValues.newpage="http://www.telegram.me/biamode";
                //SetDV("citylocation","");
                break;
            case "contact the"://تماس با ما
                //OpenChrome("http://www.takhfif2020.ir/ContactUs.aspx");
                PublicStaticValues.newpage="tk_information_items.html#m=1&pid=ContactUs";
                SetDV("citylocation","");
                break;
            case "ContactUs":
                PublicStaticValues.newpage = "http://www.biamode.com/MobilePage/Mobile_ContactUs.aspx";
                SetDV("citylocation","");
                break;
            default:
                break;
        }

        //http://www.takhfif2020.ir/ContactUs.aspx
        //http://www.takhfif2020.ir/Content/InfoRegister/%D8%B1%D8%A7%D9%87%D9%86%D9%85%D8%A7%DB%8C-%D8%B9%D8%B6%D9%88%DB%8C%D8%AA-140.aspx
        //http://www.takhfif2020.ir/Information/default.aspx
        //http://www.takhfif2020.ir/Content/AboutUs/%D8%AF%D8%B1%D8%A8%D8%A7%D8%B1%D9%87%20%D9%85%D8%A7.aspx


        if (fragment != null) {
            FragmentManager fragmentManager = getFragmentManager();
            fragmentManager.beginTransaction().replace(R.id.content_frame, fragment).commit();
            int position=lngi(code);
            mDrawerList.setItemChecked(position, true);
            mDrawerList.setSelection(position);
            mDrawerLayout.closeDrawer(mDrawerList);
        } else {
            Log.e("MainActivity", "Error in creating fragment");
        }
        mDrawerLayout.closeDrawer(mDrawerList);

    }



    public void OpenChrome(String url) {
        try {
            Intent i = new Intent("android.intent.action.MAIN");
            i.setComponent(ComponentName.unflattenFromString("com.android.chrome/com.android.chrome.Main"));
            i.addCategory("android.intent.category.LAUNCHER");
            i.setData(Uri.parse(url));
            startActivity(i);
        }
        catch(ActivityNotFoundException e) {
            // Chrome is not installed
            Intent i = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
            startActivity(i);
        }
    }

    private void selectPage(String url) {
        Fragment fragment = null;
        fragment  = WebViewFragment.newInstance(url);

        if (fragment != null) {
            FragmentManager fragmentManager = getFragmentManager();
            fragmentManager.beginTransaction().replace(R.id.content_frame, fragment).commit();

            // update selected item and title, then close the drawer
//            mDrawerList.setItemChecked(position, true);
//            mDrawerList.setSelection(position);
//            setTitle(mNavigationdrawerItemNavTitles[position]);
//            mDrawerLayout.closeDrawer(mDrawerList);

        } else {
            // error in creating fragment
            Log.e("MainActivity", "Error in creating fragment");
        }
    }

    @Override
    public void setTitle(CharSequence title) {
        mTitle = title;
        getActionBar().setTitle(mTitle);
    }

}
