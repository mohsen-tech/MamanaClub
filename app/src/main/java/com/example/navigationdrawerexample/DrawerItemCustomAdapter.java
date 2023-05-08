package com.example.navigationdrawerexample;

import android.app.Activity;
import android.content.Context;
import android.graphics.Color;
import android.graphics.Typeface;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.TextView;

public class DrawerItemCustomAdapter extends ArrayAdapter<ObjectDrawerItem> {

	Context mContext;
	int layoutResourceId;
	ObjectDrawerItem data[] = null;
    Typeface tf;

	public DrawerItemCustomAdapter(Context mContext, int layoutResourceId, ObjectDrawerItem[] data)
    {
		super(mContext, layoutResourceId, data);
		this.layoutResourceId = layoutResourceId;
		this.mContext = mContext;

        tf = Typeface.createFromAsset(getContext().getAssets(), "fonts/byekan.otf");

		this.data = data;
	}


    @Override
    public int getCount() {
        return this.data.length;
    }

    @Override
    public ObjectDrawerItem getItem(int position) {
        return data[position];
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

	@Override
	public View getView(int position, View convertView, ViewGroup parent)
    {
        View listItem = convertView;
        LayoutInflater inflater = ((Activity) mContext).getLayoutInflater();
        listItem = inflater.inflate(layoutResourceId, parent, false);

        if(data[position].hide) {
            listItem.setVisibility(View.GONE);
            listItem.getLayoutParams().height = 1;
        }else {

            ImageView imageViewIcon = (ImageView) listItem.findViewById(R.id.imageViewIcon);
            TextView textViewName = (TextView) listItem.findViewById(R.id.textViewName);

            textViewName.setTextColor(Color.WHITE);
            textViewName.setTypeface(tf);
            ObjectDrawerItem folder = data[position];

            imageViewIcon.setImageResource(folder.icon);
            textViewName.setText(folder.name);

            listItem.setVisibility(View.VISIBLE);
        }

		return listItem;
	}

}


//textViewName.setBackgroundColor(Color.RED);
//  int color = Color.argb( 200, 255, 64, 64 );
//  textViewName.setBackgroundColor( color );


//Typeface robotolight = Typeface.createFromAsset( mContext.getAssets(), "byekan.ttf");