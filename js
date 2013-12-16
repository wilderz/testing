#include<iostream>
#include<stdio.h>
#include<cstring>
using namespace std;

inline int read()
{
	int n=0;
	char c=0;
	while(c<33)
	c=getchar_unlocked();
	while(c>='0'&&c<='9')
	{
		n=(n<<3)+(n<<1)+(c-'0');
		c=getchar_unlocked();
	}
	return n;
}

int main()
{
 	int n,i,j,k,x1,x2,y1,y2,q,sum[301][301][11],temp,ta[11];
	memset(sum,0,sizeof(sum));
	memset(ta,0,sizeof(ta));
	n=read();
		for(i=1;i<=n;i++)
		{
			for(j=1;j<=n;j++)
			{
				for(k=1;k<11;k++)
				{
					sum[i][j][k]=ta[k];
				}
				temp=read();
				sum[i][j][temp]++;
				ta[temp]++;
			}
		}
		q=read();
		while(q--)
		{
			memset(ta,0,sizeof(ta));
			x1=read();
			y1=read();
			x2=read();
			y2=read();
				for(i=x1;i<=x2;i++)
				{
					for(j=1;j<11;j++)
					{
						if(y1!=1)
						ta[j]=ta[j]+(sum[i][y2][j]-sum[i][y1-1][j]);
						else
						ta[j]=ta[j]+(sum[i][y2][j]-sum[i-1][n][j]);
					}
				}
				j=0;
				for(i=1;i<11;i++)
				{
					if(ta[i]>0)
					j++;
				}
				cout<<j<<endl;
		}
}

