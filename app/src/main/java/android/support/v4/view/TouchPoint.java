package android.support.v4.view;

import android.app.Activity;

/**
 * Created by Mohsen on 12/23/2014.
 */
public class TouchPoint  extends Activity {
    public  static  float d_x=0;
    public  static  float d_y=0;

    public  static  float m_x=0;
    public  static  float m_y=0;

    public  static  float u_x=0;
    public  static  float u_y=0;

    public static  float x_menu=0;
    public static  float x_menu2=0;

    public  TouchPoint(){
    }


    public static void TouchDown()
    {
    }


    public static void TouchMove()
    {
        if(((d_x-m_x)*(d_x-m_x))>((d_y-m_y)*(d_y-m_y)))
            if((((d_x-m_x)*(d_x-m_x))>50)&&(((d_y-m_y)*(d_y-m_y)))>50) {
                if (d_x < 40) {
                    x_menu = m_x;
                } else {
                    x_menu = 0;
                }

                if ((d_x > m_x) && ((d_x - m_x) > 30)) {
                    x_menu2 = m_x;
                } else {
                    x_menu2 = 0;
                }
            }

    }


    public static void TouchUp()
    {

    }
}
