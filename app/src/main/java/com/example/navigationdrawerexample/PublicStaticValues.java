package com.example.navigationdrawerexample;

import android.app.Activity;
import android.content.Context;
import android.net.Uri;
import android.webkit.ValueCallback;

import java.util.Stack;


public class PublicStaticValues {
    public static String oldpage="";
    public static String newpage="";
    public static String lastpage="";
    public static Stack spages=new Stack();

    public static Context mContext;
    public static Activity mActivity;
    public static int OpenNav=0;
    public static int ExecuteFunction=0;
    public static String frameMsg="";
    public static String frameMsg_tmp="";

    public static String oldSelectItem="";
    public static String newSelectItem="";


    public static final int FILECHOOSER_RESULTCODE   = 2888;
    public static ValueCallback<Uri> mUploadMessage;
    public static Uri mCapturedImageURI = null;
    public static byte[] BufferChooseFile;
}
