package com.example.navigationdrawerexample;

public class ObjectDrawerItem {

	public int icon;
    public String name;
    public String code;
    public boolean hide;

    public ObjectDrawerItem(int icon, String name, String code,boolean hide)
    {
        this.icon = icon;
        this.name = name;
        this.code = code;
        this.hide = hide;
    }

    public ObjectDrawerItem(int icon, String name, String code)
    {
        this.icon = icon;
        this.name = name;
        this.code = code;
        this.hide = false;
    }

    public ObjectDrawerItem(int icon, String name)
    {

        this.icon = icon;
        this.name = name;
        this.code = "";
        this.hide = false;
    }



}
