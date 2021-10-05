(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return m}));var a=n(3),l=n(7),r=(n(0),n(132)),b=["components"],c={slug:"python-pandas-intro",title:"Intro to Python Pandas"},p={unversionedId:"data/1-python/python-pandas-intro",id:"data/1-python/python-pandas-intro",isDocsHomePage:!1,title:"Intro to Python Pandas",description:"Series",source:"@site/docs/data/1-python/python-pandas-intro.md",slug:"/data/1-python/python-pandas-intro",permalink:"/TIL/docs/data/1-python/python-pandas-intro",editUrl:"https://github.com/doinghun/TIL/edit/master/website/docs/data/1-python/python-pandas-intro.md",version:"current",lastUpdatedAt:1632925168,sidebar:"data",previous:{title:"Numpy in Python",permalink:"/TIL/docs/data/1-python/python-numpy"},next:{title:"Useful Methods in Pandas",permalink:"/TIL/docs/data/1-python/python-pandas-methods"}},i=[{value:"Creating a Series",id:"creating-a-series",children:[]},{value:"Using an Index",id:"using-an-index",children:[]},{value:"Selection &amp; Indexing",id:"selection--indexing",children:[{value:"Columns",id:"columns",children:[]},{value:"Rows",id:"rows",children:[]},{value:"Conditional Selection",id:"conditional-selection",children:[]}]},{value:"More Index Details",id:"more-index-details",children:[]},{value:"Multi-Index &amp; INdex Hierarchy",id:"multi-index--index-hierarchy",children:[]}],d={rightToc:i};function m(e){var t=e.components,n=Object(l.a)(e,b);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"series"},"Series"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Similar to Numpy array except it can be named or given datetime index (instead of numerical index)")),Object(r.b)("h3",{id:"creating-a-series"},"Creating a Series"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"import numpy as np\nimport pandas as pd\n\nlabels = ['a','b','c']\nmy_list = [10,20,30]\narr = np.array([10,20,30])\nd = {'a':10,'b':20,'c':30} # dictionary\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Using Lists")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"pd.Series(data=my_list)\n# 0    10\n# 1    20\n# 2    30\n# dtype: int64\n\npd.Series(data=my_list,index=labels)\n# a   10\n# b   20\n# c   30\n# dtype: int64\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Using NumPy Arrays")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"pd.Series(arr)\n# 0    10\n# 1    20\n# 2    30\n# dtype: int64\n\npd.Series(arr,labels)\n# a    10\n# b    20\n# c    30\n# dtype: int64\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Using Dictionary")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"pd.Series(d)\n# a    10\n# b    20\n# c    30\n# dtype: int64\n")),Object(r.b)("h2",{id:"using-an-index"},"Using an Index"),Object(r.b)("p",null,"Pandas makes use of these index names or numbers by allowing for fast look ups of information (works like a hash table or dictionary)."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"ser1 = pd.Series([1,2,3,4],index = ['USA', 'Germany','USSR', 'Japan'])\n# USA        1\n# Germany    2\n# USSR       3\n# Japan      4\n# dtype: int64\n\nser2 = pd.Series([1,2,5,4],index = ['USA', 'Germany','Italy', 'Japan'])\n# USA        1\n# Germany    2\n# Italy      5\n# Japan      4\n# dtype: int64\n\nser1['USA']\n# 1\n\nser1 + ser2\n# Germany    4.0\n# Italy      NaN\n# Japan      8.0\n# USA        2.0\n# USSR       NaN\n# dtype: float64\n\n# no match => null value\n")),Object(r.b)("h1",{id:"dataframes"},"DataFrames"),Object(r.b)("p",null,"DataFrames are the workhorse of pandas and are directly inspired by the R programming language. We can think of a DataFrame as a bunch of Series objects put together to share the same index."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"import pandas as pd\nimport numpy as np\n\nfrom numpy.random import randn\nnp.random.seed(101)\n\ndf = pd.DataFrame(\n    randn(5,4), #data\n    index='A B C D E'.split(), #index\n    columns='W X Y Z'.split() #columns\n    )\n")),Object(r.b)("h2",{id:"selection--indexing"},"Selection & Indexing"),Object(r.b)("h3",{id:"columns"},"Columns"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"df['W']\n\n# Pass a list of column names\ndf[['W','Z']]\n")),Object(r.b)("p",null,"DataFrame Columns are just Series"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"type(df['W'])\n# pandas.core.series.Series\n")),Object(r.b)("p",null,"Creating a new column:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"df['new'] = df['W'] + df['Y']\n")),Object(r.b)("p",null,"Removing columns"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"# axis = 0 : row\n# axis = 1 : column\n\ndf.drop('new',axis=1) # Not Inplace\n\ndf.drop('new',axis=1,inplace=True) # Inplace\n")),Object(r.b)("h3",{id:"rows"},"Rows"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"# label based index\ndf.loc['A']\n\nW    2.706850\nX    0.628133\nY    0.907969\nZ    0.503826\nName: A, dtype: float64\n\n# numerical based index\ndf.iloc[2]\n\nW   -2.018168\nX    0.740122\nY    0.528813\nZ   -0.589001\nName: C, dtype: float64\n")),Object(r.b)("p",null,"Selecting subset of rows & columns"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"df.loc['B','Y'] #[R,C]\n-0.84807698340363147\n\ndf.loc[['A','B'],['W','Y']]\n")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null}),Object(r.b)("th",{parentName:"tr",align:null},"W"),Object(r.b)("th",{parentName:"tr",align:null},"Y"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"A"),Object(r.b)("td",{parentName:"tr",align:null},"2.706850"),Object(r.b)("td",{parentName:"tr",align:null},"0.907969")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"B"),Object(r.b)("td",{parentName:"tr",align:null},"0.651118"),Object(r.b)("td",{parentName:"tr",align:null},"-0.848077")))),Object(r.b)("h3",{id:"conditional-selection"},"Conditional Selection"),Object(r.b)("p",null,"An important feature of pandas is conditional selection using bracket notation, very similar to numpy."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"df\n")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null}),Object(r.b)("th",{parentName:"tr",align:null},"W"),Object(r.b)("th",{parentName:"tr",align:null},"X"),Object(r.b)("th",{parentName:"tr",align:null},"Y"),Object(r.b)("th",{parentName:"tr",align:null},"Z"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"A"),Object(r.b)("td",{parentName:"tr",align:null},"2.706850"),Object(r.b)("td",{parentName:"tr",align:null},"0.628133"),Object(r.b)("td",{parentName:"tr",align:null},"0.907969"),Object(r.b)("td",{parentName:"tr",align:null},"0.503826")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"B"),Object(r.b)("td",{parentName:"tr",align:null},"0.651118"),Object(r.b)("td",{parentName:"tr",align:null},"-0.319318"),Object(r.b)("td",{parentName:"tr",align:null},"-0.848077"),Object(r.b)("td",{parentName:"tr",align:null},"0.605965")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"C"),Object(r.b)("td",{parentName:"tr",align:null},"-2.018168"),Object(r.b)("td",{parentName:"tr",align:null},"0.740122"),Object(r.b)("td",{parentName:"tr",align:null},"0.528813"),Object(r.b)("td",{parentName:"tr",align:null},"-0.589001")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"D"),Object(r.b)("td",{parentName:"tr",align:null},"0.188695"),Object(r.b)("td",{parentName:"tr",align:null},"-0.758872"),Object(r.b)("td",{parentName:"tr",align:null},"-0.933237"),Object(r.b)("td",{parentName:"tr",align:null},"0.955057")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"E"),Object(r.b)("td",{parentName:"tr",align:null},"0.190794"),Object(r.b)("td",{parentName:"tr",align:null},"1.978757"),Object(r.b)("td",{parentName:"tr",align:null},"2.605967"),Object(r.b)("td",{parentName:"tr",align:null},"0.683509")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"df>0\n# returns 5x4 table of boolean\n\ndf[df>0]\n# returns 5x4 table with +ve num\n\ndf[df['W']>0]\n# returns 4x4 table where column W has only +ve num\n\ndf[df['W']>0]['Y']\n# returns Series of Y column which satisfies the condition\n\ndf[df['W']>0]['Y','X']\n# returns 4x2 table of Y & X which satisfies the condition\n\n## For two conditions, use | and & with parenthesis: (Can't use `and`)\n\ndf[(df['W']>0) & (df['Y'] > 1)]\n")),Object(r.b)("h2",{id:"more-index-details"},"More Index Details"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"# Reset to dafult 0,1...n index\ndf.reset_index()\n#(Need Inplace arg)\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"newind = 'CA NY WY OR CO'.split()\n\ndf['States'] = newind\n\ndf\n")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null}),Object(r.b)("th",{parentName:"tr",align:null},"W"),Object(r.b)("th",{parentName:"tr",align:null},"X"),Object(r.b)("th",{parentName:"tr",align:null},"Y"),Object(r.b)("th",{parentName:"tr",align:null},"Z"),Object(r.b)("th",{parentName:"tr",align:null},"States"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"A"),Object(r.b)("td",{parentName:"tr",align:null},"2.706850"),Object(r.b)("td",{parentName:"tr",align:null},"0.628133"),Object(r.b)("td",{parentName:"tr",align:null},"0.907969"),Object(r.b)("td",{parentName:"tr",align:null},"0.503826"),Object(r.b)("td",{parentName:"tr",align:null},"CA")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"B"),Object(r.b)("td",{parentName:"tr",align:null},"0.651118"),Object(r.b)("td",{parentName:"tr",align:null},"-0.319318"),Object(r.b)("td",{parentName:"tr",align:null},"-0.848077"),Object(r.b)("td",{parentName:"tr",align:null},"0.605965"),Object(r.b)("td",{parentName:"tr",align:null},"NY")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"C"),Object(r.b)("td",{parentName:"tr",align:null},"-2.018168"),Object(r.b)("td",{parentName:"tr",align:null},"0.740122"),Object(r.b)("td",{parentName:"tr",align:null},"0.528813"),Object(r.b)("td",{parentName:"tr",align:null},"-0.589001"),Object(r.b)("td",{parentName:"tr",align:null},"WY")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"D"),Object(r.b)("td",{parentName:"tr",align:null},"0.188695"),Object(r.b)("td",{parentName:"tr",align:null},"-0.758872"),Object(r.b)("td",{parentName:"tr",align:null},"-0.933237"),Object(r.b)("td",{parentName:"tr",align:null},"0.955057"),Object(r.b)("td",{parentName:"tr",align:null},"OR")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"E"),Object(r.b)("td",{parentName:"tr",align:null},"0.190794"),Object(r.b)("td",{parentName:"tr",align:null},"1.978757"),Object(r.b)("td",{parentName:"tr",align:null},"2.605967"),Object(r.b)("td",{parentName:"tr",align:null},"0.683509"),Object(r.b)("td",{parentName:"tr",align:null},"CO")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"df.set_index('States')\n#(Need Inplace arg)\n\ndf.set_index('States',inplace=True)\n")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"States"),Object(r.b)("th",{parentName:"tr",align:null},"W"),Object(r.b)("th",{parentName:"tr",align:null},"X"),Object(r.b)("th",{parentName:"tr",align:null},"Y"),Object(r.b)("th",{parentName:"tr",align:null},"Z"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"CA"),Object(r.b)("td",{parentName:"tr",align:null},"2.706850"),Object(r.b)("td",{parentName:"tr",align:null},"0.628133"),Object(r.b)("td",{parentName:"tr",align:null},"0.907969"),Object(r.b)("td",{parentName:"tr",align:null},"0.503826")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"NY"),Object(r.b)("td",{parentName:"tr",align:null},"0.651118"),Object(r.b)("td",{parentName:"tr",align:null},"-0.319318"),Object(r.b)("td",{parentName:"tr",align:null},"-0.848077"),Object(r.b)("td",{parentName:"tr",align:null},"0.605965")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"WY"),Object(r.b)("td",{parentName:"tr",align:null},"-2.018168"),Object(r.b)("td",{parentName:"tr",align:null},"0.740122"),Object(r.b)("td",{parentName:"tr",align:null},"0.528813"),Object(r.b)("td",{parentName:"tr",align:null},"-0.589001")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"OR"),Object(r.b)("td",{parentName:"tr",align:null},"0.188695"),Object(r.b)("td",{parentName:"tr",align:null},"-0.758872"),Object(r.b)("td",{parentName:"tr",align:null},"-0.933237"),Object(r.b)("td",{parentName:"tr",align:null},"0.955057")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"CO"),Object(r.b)("td",{parentName:"tr",align:null},"0.190794"),Object(r.b)("td",{parentName:"tr",align:null},"1.978757"),Object(r.b)("td",{parentName:"tr",align:null},"2.605967"),Object(r.b)("td",{parentName:"tr",align:null},"0.683509")))),Object(r.b)("h2",{id:"multi-index--index-hierarchy"},"Multi-Index & INdex Hierarchy"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"# Index Levels\noutside = ['G1','G1','G1','G2','G2','G2']\ninside = [1,2,3,1,2,3]\nhier_index = list(zip(outside,inside))\nhier_index = pd.MultiIndex.from_tuples(hier_index)\n\n# MultiIndex(levels=[['G1', 'G2'], [1, 2, 3]],\n#            labels=[[0, 0, 0, 1, 1, 1], [0, 1, 2, 0, 1, 2]])\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"df = pd.DataFrame(np.random.randn(6,2),index=hier_index,columns=['A','B'])\n")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null}),Object(r.b)("th",{parentName:"tr",align:null}),Object(r.b)("th",{parentName:"tr",align:null},"A"),Object(r.b)("th",{parentName:"tr",align:null},"B"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"G1"),Object(r.b)("td",{parentName:"tr",align:null},"1"),Object(r.b)("td",{parentName:"tr",align:null},"0.302665"),Object(r.b)("td",{parentName:"tr",align:null},"1.693723")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"G1"),Object(r.b)("td",{parentName:"tr",align:null},"2"),Object(r.b)("td",{parentName:"tr",align:null},"-1.706086"),Object(r.b)("td",{parentName:"tr",align:null},"-1.159119")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"G1"),Object(r.b)("td",{parentName:"tr",align:null},"3"),Object(r.b)("td",{parentName:"tr",align:null},"-0.134841"),Object(r.b)("td",{parentName:"tr",align:null},"0.390528")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"G2"),Object(r.b)("td",{parentName:"tr",align:null},"1"),Object(r.b)("td",{parentName:"tr",align:null},"0.166905"),Object(r.b)("td",{parentName:"tr",align:null},"0.184502")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"G2"),Object(r.b)("td",{parentName:"tr",align:null},"2"),Object(r.b)("td",{parentName:"tr",align:null},"0.807706"),Object(r.b)("td",{parentName:"tr",align:null},"0.072960")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"G2"),Object(r.b)("td",{parentName:"tr",align:null},"3"),Object(r.b)("td",{parentName:"tr",align:null},"0.638787"),Object(r.b)("td",{parentName:"tr",align:null},"0.329646")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"df.loc['G1']\n")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null}),Object(r.b)("th",{parentName:"tr",align:null},"A"),Object(r.b)("th",{parentName:"tr",align:null},"B"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"1"),Object(r.b)("td",{parentName:"tr",align:null},"0.302665"),Object(r.b)("td",{parentName:"tr",align:null},"1.693723")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"2"),Object(r.b)("td",{parentName:"tr",align:null},"-1.706086"),Object(r.b)("td",{parentName:"tr",align:null},"-1.159119")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"3"),Object(r.b)("td",{parentName:"tr",align:null},"-0.134841"),Object(r.b)("td",{parentName:"tr",align:null},"0.390528")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"df.loc['G1'].loc[1]\n\n# A    0.302665\n# B    1.693723\n# Name: 1, dtype: float64\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"df.index.names\n# FrozenList([None, None])\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"df.index.names = ['Group','Num']\n")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Group"),Object(r.b)("th",{parentName:"tr",align:null},"Num"),Object(r.b)("th",{parentName:"tr",align:null},"A"),Object(r.b)("th",{parentName:"tr",align:null},"B"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"G1"),Object(r.b)("td",{parentName:"tr",align:null},"1"),Object(r.b)("td",{parentName:"tr",align:null},"0.302665"),Object(r.b)("td",{parentName:"tr",align:null},"1.693723")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"G1"),Object(r.b)("td",{parentName:"tr",align:null},"2"),Object(r.b)("td",{parentName:"tr",align:null},"-1.706086"),Object(r.b)("td",{parentName:"tr",align:null},"-1.159119")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"G1"),Object(r.b)("td",{parentName:"tr",align:null},"3"),Object(r.b)("td",{parentName:"tr",align:null},"-0.134841"),Object(r.b)("td",{parentName:"tr",align:null},"0.390528")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"G2"),Object(r.b)("td",{parentName:"tr",align:null},"1"),Object(r.b)("td",{parentName:"tr",align:null},"0.166905"),Object(r.b)("td",{parentName:"tr",align:null},"0.184502")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"G2"),Object(r.b)("td",{parentName:"tr",align:null},"2"),Object(r.b)("td",{parentName:"tr",align:null},"0.807706"),Object(r.b)("td",{parentName:"tr",align:null},"0.072960")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"G2"),Object(r.b)("td",{parentName:"tr",align:null},"3"),Object(r.b)("td",{parentName:"tr",align:null},"0.638787"),Object(r.b)("td",{parentName:"tr",align:null},"0.329646")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"df.xs('G1') # cross-section\n")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Num"),Object(r.b)("th",{parentName:"tr",align:null},"A"),Object(r.b)("th",{parentName:"tr",align:null},"B"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"1"),Object(r.b)("td",{parentName:"tr",align:null},"0.302665"),Object(r.b)("td",{parentName:"tr",align:null},"1.693723")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"2"),Object(r.b)("td",{parentName:"tr",align:null},"-1.706086"),Object(r.b)("td",{parentName:"tr",align:null},"-1.159119")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"3"),Object(r.b)("td",{parentName:"tr",align:null},"-0.134841"),Object(r.b)("td",{parentName:"tr",align:null},"0.390528")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"df.xs(['G1',1])\n# A    0.302665\n# B    1.693723\n# Name: (G1, 1), dtype: float64\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"df.xs(1,level='Num')\n")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Group"),Object(r.b)("th",{parentName:"tr",align:null},"A"),Object(r.b)("th",{parentName:"tr",align:null},"B"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"G1"),Object(r.b)("td",{parentName:"tr",align:null},"0.302665"),Object(r.b)("td",{parentName:"tr",align:null},"1.693723")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"G2"),Object(r.b)("td",{parentName:"tr",align:null},"0.166905"),Object(r.b)("td",{parentName:"tr",align:null},"0.184502")))))}m.isMDXComponent=!0},132:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return j}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=l.a.createContext({}),d=function(e){var t=l.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=d(e.components);return l.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},O=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,b=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=d(n),O=a,j=m["".concat(b,".").concat(O)]||m[O]||u[O]||r;return n?l.a.createElement(j,c(c({ref:t},i),{},{components:n})):l.a.createElement(j,c({ref:t},i))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,b=new Array(r);b[0]=O;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,b[1]=c;for(var i=2;i<r;i++)b[i]=n[i];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);