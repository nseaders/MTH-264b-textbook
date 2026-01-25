var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  linnbenton.edu   copyright  "
},
{
  "id": "prologue",
  "level": "1",
  "url": "prologue.html",
  "type": "Chapter",
  "number": "0",
  "title": "Prologue",
  "body": " Prologue  This textbook is a work in progress, and is being written specifically for Mechanical Engineering majors at OSU to introduce just enough Python code to implement Matrix Algebra taught in MTH 264. You are currently reading a first draft. We expect some of our students to know more than we do, and hope, with their permission, to include their ideas and contributions to the textbook.  Note that instead of needing to install any software on your device we will use embedded SageMathCell. You will need a laptop (or tablet with a keyboard) for each class day, however. Laptops are available for checkout in the LBCC library.   "
},
{
  "id": "section-variables",
  "level": "1",
  "url": "section-variables.html",
  "type": "Section",
  "number": "1.1",
  "title": "Variables",
  "body": " Variables  In this section we will learn how to assign values to a variable in Python and display results.     Create a variable and assign it a value in Python using =     Display the value of a variable in Python using print()       A variable is like a container that can be used to store information or data. In Python you assign a value to a variable using = .  Run the Python code below by clicking the Evaluate (Python) button.   Note that the function print() was needed to display the value of the variable.  Change the value of the variable a by adding 5 after the 2*3 above and run the code again to see how the output changes.    Naming Variables  Variables can be named using letters, underscores, numbers, etc. Just be sure to use the exact same name to call your variable.  For example, the following code has a syntax error. Run the code as is and see what happens.    Can you fix the bug in the above code so it runs correctly?   Variables are case sensitive and must be exactly the same for Python to recognize them.     Arithmetic and Comments in Python  Python recognizes simple arithmetic symbols like + -, *, \/ .  Meanwhile a hashtag # can be used to tell Python to ignore code, reading what follows as a comment by the author rather than a Python command.   Comments can help anyone reading your code understand what that section of the code is doing. You can also comment out portions of code to isolate a bug.   In the box below, change the value of the variable arithmetic to try out some basic calculations. Add a comment using # to explain what your code is doing.   You can use the standard order of operations and parentheses (PEMDAS).      More about Variables  Just like in math, variables can be helpful when the information will change. Recall the formula for the area of a circle .  In the code below,    fill in the formula for the area of the circle using the appropriate variable names and arithmetic operations.      Use the code to approximately compute the area of a circle with radius 5 and a circle with radius 13.     Note that print will display comma separated items one right after the other. In the code above we first displayed the string The area of a circle is followed by the current value of our variable circle_area .    Syntax and Semantic errors  One error we can make when creating and editing code is to mis-type a command causing Python to not understand the syntax , that is the chosen command, in our program. Another error is when we make our meaning unclear, more of a semantic issue. For example you can add numbers to numbers or strings of letters to strings of letters in Python but if we try to add a number to a string of letters, Python will not know what is meant by adding.    Summary     A variable can be used as a container to store data or information.      Use print(variable_name) to display the information stored in the variable.      Use # to comment and make your code more readable.       Try some Python here.   "
},
{
  "id": "section-variables-3",
  "level": "2",
  "url": "section-variables.html#section-variables-3",
  "type": "Objectives",
  "number": "1.1",
  "title": "",
  "body": "   Create a variable and assign it a value in Python using =     Display the value of a variable in Python using print()     "
},
{
  "id": "section-variables-4-1",
  "level": "2",
  "url": "section-variables.html#section-variables-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "variable "
},
{
  "id": "section-variables-4-5",
  "level": "2",
  "url": "section-variables.html#section-variables-4-5",
  "type": "You Try",
  "number": "1.1",
  "title": "",
  "body": "Change the value of the variable a by adding 5 after the 2*3 above and run the code again to see how the output changes. "
},
{
  "id": "subsec-naming-variables-5",
  "level": "2",
  "url": "section-variables.html#subsec-naming-variables-5",
  "type": "You Try",
  "number": "1.2",
  "title": "",
  "body": " Can you fix the bug in the above code so it runs correctly?   Variables are case sensitive and must be exactly the same for Python to recognize them.  "
},
{
  "id": "subsec_comments_in_Python-6",
  "level": "2",
  "url": "section-variables.html#subsec_comments_in_Python-6",
  "type": "You Try",
  "number": "1.3",
  "title": "",
  "body": " In the box below, change the value of the variable arithmetic to try out some basic calculations. Add a comment using # to explain what your code is doing.   You can use the standard order of operations and parentheses (PEMDAS).  "
},
{
  "id": "exercises-variable-1",
  "level": "2",
  "url": "section-variables.html#exercises-variable-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "Try some Python here. "
},
{
  "id": "section-modules",
  "level": "1",
  "url": "section-modules.html",
  "type": "Section",
  "number": "1.2",
  "title": "Python Packages and NumPy",
  "body": " Python Packages and NumPy  Python packages and libraries are collections of functions and modules centered around a common theme. In this section we will learn how to import a Python package and use functions from that package.     Import a Python package or library (our example NumPy).    Use functions from a Python package.      Importing the package NumPy  NumPy is an open source scientific computing package that allows you to use standard mathematical functions and constants like sine or pi. NumPy also allows you to work with arrays of numbers so you can efficiently perform computations.   Note to call a function from an imported package you must use the syntax package.function . To avoid retyping the long name of a package every time, it is standard practice to rename the package as you import.  Rename the package numpy in the above code by replacing the import line with import numpy as np . Next use the new name of the package to call the function np.sin() and re-run.    Standard functions in NumPy  In addition to the standard trigonometric functions, NumPy also contains as exp() and natural log as log() , as well as the standard mathematical constants like pi and e .  Use the NumPy package to compute the area of a circle using pi. If you import numpy as np, you will use np.pi     NumPy arrays  NumPy arrays can help us efficiently do computations with a collection of numbers all at once. We can also represent vectors or matrices using NumPy arrays. Run the code below that calls the NumPy function array to see how it works.   NumPy also has built in functions to automatically create an array with certain conditions. For example linspace() takes a given interval and sets up an array of evenly spaced numbers on that interval.   Note that the array includes 5, so it takes 11 evenly spaced numbers to get numbers 0.5 apart. Note also that although the number values are evenly spaced, the printed array is not. Namely the default is to space out the entries by the maximum number of decimal places with blank spaces instead of extra zeroes.  Edit the above code to use linspace to create an array of numbers between 0 and 5 that are one-quarter apart. When you evaluate your code should print the list 0, 0.25, 0.5, 0.75, etc.  Another way to create an array of values for a given interval is arange() , which uses a step value to set up a sequence of numbers within that interval.   Note that the right endpoint of the interval in arange is always excluded (strictly less than).  Edit the above code to use arange to create an array of numbers between 0 and 5 that are one-quarter apart. When you evaluate your code should print the list 0, 0.25, 0.5, 0.75, etc.    Selecting and using part of an array  We can access an entry of a one-dimensional array using it's index with array_name[index number] , where the index numbers the positions of the elements in the array starting with the number 0.    Edit the code above to access and print the 4th entry, the 100th entry, and the last entry in the array X.   Note: The last element of the array can also be accessed using index -1.  For higher dimensional arrays, you need more than one index to access a single entry array_name[index 1, index 2, index 3] .  Slicing selects a range of entries in an array by placing a colon between the desired start and stop index values. Note the entry at the stop index is not included.    Edit the above code to create a new array out of the middle 50 values of the given array.     Importing .csv files using the Pandas package  Sometimes we want to import an array from a file or spreadsheet. The Python package, Pandas, was created to manipulate spreadsheet data. While the main object in NumPy is a NumPy array, the main object in the Pandas package is a Pandas dataframe, essentially a table with indexed rows and named columns. More information about dataframe (table) manipulation in Pandas will be added to the appendix in future versions of this book.  For now we will just use the Pandas package to import a .csv file as a Pandas dataframe, then convert it into a NumPy array so we can use the computational power of NumPy. Since we don't have a simple way to upload files into the online textbook, the following code must be used in Google Colab, with the file uploaded temporarily to Colab, or on your local machine with a local version of Python and the appropriate filepath.   Warning: read_csv defaults to reading in a table with headers (column names). Otherwise use pd.read_csv('filepath.csv', header = None)     You can find more information about the package NumPy at . You can find more information about the package Pandas at . Python's wiki has a list of other commonly used modules and packages.     Summary     You can import a Python package and rename it by using import package as name .    You can call a function from a package using packagename.function     Numpy arrays can help us efficiently do computations.    The Numpy functions linspace() and arange() set up an array of values over an interval.    Indexing and slicing a numpy array can be used to access a single entry or a range of entries.    You can use the Pandas function read_csv to import a .csv file as a Pandas dataframe then convert it into a NumPy array using array.to_numpy() .       Research NumPy   Look up how to efficiently create a 15 element array of all 's.    Use this to create a 15 element array of all 's.       There is more than one way to do this. One approach is to use the numpy function ones().     Once you have an array of all 1's, you can multiply it by any number you want.      The magnitude of an earthquake is measured using the Richter Scale, which is a logarithmic scale. The amount of energy in ergs an earthquake releases can be determined from the magnitude using the formula The USGS website lets you download magnitude data for the 30 most recent earthquakes in the world with magnitude . Use Numpy to determine how much energy has been released in the 30 most recent earthquakes. Note that you can copy and paste data from a csv file into SageMathCell. You will just need to then format that data for Numpy.    "
},
{
  "id": "section-modules-3",
  "level": "2",
  "url": "section-modules.html#section-modules-3",
  "type": "Objectives",
  "number": "1.2",
  "title": "",
  "body": "   Import a Python package or library (our example NumPy).    Use functions from a Python package.    "
},
{
  "id": "section-modules-4-5",
  "level": "2",
  "url": "section-modules.html#section-modules-4-5",
  "type": "You Try",
  "number": "1.4",
  "title": "",
  "body": "Rename the package numpy in the above code by replacing the import line with import numpy as np . Next use the new name of the package to call the function np.sin() and re-run. "
},
{
  "id": "section-modules-5-3",
  "level": "2",
  "url": "section-modules.html#section-modules-5-3",
  "type": "You Try",
  "number": "1.5",
  "title": "",
  "body": "Use the NumPy package to compute the area of a circle using pi. If you import numpy as np, you will use np.pi "
},
{
  "id": "section-modules-6-7",
  "level": "2",
  "url": "section-modules.html#section-modules-6-7",
  "type": "You Try",
  "number": "1.6",
  "title": "",
  "body": "Edit the above code to use linspace to create an array of numbers between 0 and 5 that are one-quarter apart. When you evaluate your code should print the list 0, 0.25, 0.5, 0.75, etc. "
},
{
  "id": "section-modules-6-11",
  "level": "2",
  "url": "section-modules.html#section-modules-6-11",
  "type": "You Try",
  "number": "1.7",
  "title": "",
  "body": "Edit the above code to use arange to create an array of numbers between 0 and 5 that are one-quarter apart. When you evaluate your code should print the list 0, 0.25, 0.5, 0.75, etc. "
},
{
  "id": "section-modules-7-4",
  "level": "2",
  "url": "section-modules.html#section-modules-7-4",
  "type": "You Try",
  "number": "1.8",
  "title": "",
  "body": " Edit the code above to access and print the 4th entry, the 100th entry, and the last entry in the array X.  "
},
{
  "id": "section-modules-7-9",
  "level": "2",
  "url": "section-modules.html#section-modules-7-9",
  "type": "You Try",
  "number": "1.9",
  "title": "",
  "body": " Edit the above code to create a new array out of the middle 50 values of the given array.  "
},
{
  "id": "exercises-modules-1",
  "level": "2",
  "url": "section-modules.html#exercises-modules-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "Research NumPy   Look up how to efficiently create a 15 element array of all 's.    Use this to create a 15 element array of all 's.       There is more than one way to do this. One approach is to use the numpy function ones().     Once you have an array of all 1's, you can multiply it by any number you want.     "
},
{
  "id": "exercises-modules-2",
  "level": "2",
  "url": "section-modules.html#exercises-modules-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "The magnitude of an earthquake is measured using the Richter Scale, which is a logarithmic scale. The amount of energy in ergs an earthquake releases can be determined from the magnitude using the formula The USGS website lets you download magnitude data for the 30 most recent earthquakes in the world with magnitude . Use Numpy to determine how much energy has been released in the 30 most recent earthquakes. Note that you can copy and paste data from a csv file into SageMathCell. You will just need to then format that data for Numpy.  "
},
{
  "id": "section-matplotlib",
  "level": "1",
  "url": "section-matplotlib.html",
  "type": "Section",
  "number": "1.3",
  "title": "Matplotlib and 2D graphing",
  "body": " Matplotlib and 2D graphing  Matplotlib is a Python library that uses NumPy arrays ( ) to create static or interactive graphs and data visualizations. In this section we will learn how to use the MatPlotLib to graph curves and plot points in 2D.     Use Matplotlib to graph curves.    Use Matplotlib to make a scatterplot.    Use Matplotlib to graph vectors.    Label the axes on a graph and customize features.    Create multiple subplots.      Creating a graph or plot  A Matplotlib API (Application Programming Interface) called pyplot is used to create the figure and individual graphs. The figure acts as a container and can contain multiple subplots, each an axes object.   You can also create a figure and a plot with just one line of code using a comma to separate the two and the function plt.subplots() that creates both at once.     Curves in 2D  Matplotlib graphs curves by plotting points and connecting the dots. The inputs and outputs are given by NumPy arrays and then plotted on the axes.            Read through both sets of code below that uses matplotlib to graph a line and a sine curve to see the syntax for these steps. Do you see the difference in how the numpy arrays were created for the inputs and outputs? Run both sets of code to see the result.    Note when `connecting the dots' you need enough points to get a smooth curve.  Change both of the above sets of code to whole number inputs from 0 to 6.   What happens to your line?    What happens to your sine curve?     Change the above code to use arange() instead of linspace() to set up your inputs. What is the smallest step size that makes the curve look smooth?  Change the above code to graph with a traditional input window like [-10,10].  You can plot more than one curve on the same axes using the same inputs but more than one set of outputs. Run the code below to graph and on the same graph.   Notice that if you don't specify the inputs, pyplot uses a default set instead. Change the above code and remove the second call for the inputs X in graph.plot(). What is the default input window pyplot uses for Y2?  Change the above code to add a third function on the same graph.    Scatter Plots in 2D  To graph a scatterplot, use the command scatter instead of plot .  Adjust the code in any plot above to make it into a scatter plot instead.  Replace ax.plot() with ax.scatter() in the code.   For scatter plots sometimes you get the data from an experiment instead of a formula. As long as the outputs are given as a NumPy array, either from manipulating your input array, or by creating a completely new output array, Matplotlib will still connect the dots.     Parametric Curves in 2D  In mathematics and the sciences we sometimes introduce a new parameter and write coordinates and in terms of that parameter. This is common for curves that are not functions of , like circles or ellipses, or a nice way to model motion, where the and coordinate location of an object is the output at each input time . If you haven't seen this in a Trigonometry class, or if you need a refresher, check out . In mathematics these parametric curves or space curves are often written as a set of two parametric equations or a vector-valued function.  For example, we can graph a circle using or, equivalently, for values of in   Matplotlib still graphs these curves by plotting points using plot and connecting the dots, which will make it easy to generalize these curves to 3D.   Note that the above code graphs the unit circle. Play with the above functions for and to see what other interesting curves you can graph. In particular, when you have the parameter , can you create  a line?  a different circle?  a parabola?      Titles and Axes Labels  You can easily add titles and label each axis using the commands set_title(\"title_here\") , set_xlabel(\"label_here\") , set_ylabel(\"label_here\") . Since the code below is longer, you might need to scroll to see all of the commands.    You can also adjust the tick marks on the axes, but it takes a little more work, and there are multiple approaches.  Search online for a way to change the tick labels in Matplotlib. Try and adjust the \"Falling Body\" graph to have tickmarks every half second.    Customizing  You can customize pretty much everything in each plot: colors, markers, line width and styles, etc. Below are a few examples.    The comma separated list of possible commands inside the parentheses of a function like plot() are called the arguments of the function. The functions plot and scatter can take arguments like color=\"color_here\" , linestyle=\"style_here\" , linewidth=number_here , marker=\"markertype_here\" .    Vectors in 2D  Matplotlib plots vectors using a function from pyplot called quiver , which takes an initial coordinate, followed by the vector coordinates, to draw an arrow. Since the axes of your graph are not determined by the input domain of a function, you need to explicitly choose your axes limits using xlim and ylim .   Try various viewing windows in the above code. What do you notice about the size of your arrow?  Since quiver is typically used for vector fields, the size scales automatically based on other elements of the graph. Here we want to use the -axes as a fixed scale to draw the vectors, and so will include the arguments angles='xy', scale_units='xy', scale=1 inside quiver .   Try various vectors and viewing windows in the above code.  For multiple vectors it can be helpful to color code and use pyplot's grid() and legend() feature.   Try various vectors and viewing windows in the above code. Also add a horizontal and vertical axis at and using the code found in the second Customizing example.    Multiple plots in the same figure  Sometimes we want more than one graph in the same figure. Multiple graphs can be added to the same figure using plt.subplots() , which sets up the number of rows or columns of desired plots. Note the axes() function creates each separate graph and their individual axes.       There are other ways to set up your figure and your axes in Matplotlib. Some are shortcuts and Matplotlib will use default settings (e.g. if we do not explicitly give inputs for the function we want to graph). The approach in this section is very explicit and object oriented, which makes it easier to see how to control each feature as we get started.    Summary     Every graph needs a figure object and an axes object (which is essentially a single plot). The graph object will plot just the axes if no other information is given.    We graph a connected curve on our axes using axes_name.plot(array x,array y) for both standard equations and parametric curves.    We graph a scatterplot on our axes using axes_name.scatter(array x, array y) .    We graph a parametric curve on our axes using axes_name.plot(array x, array y) .    We can use numpy.linspace() to efficiently create enough points for plot() to connect the dots into a smooth-looking curve.    We can add titles and labels using axes_name.set_title(\"Title\") or axes_name.set_xlabel(\"input_label\") .    We can customize color, linestyles, plotting styles, thickness, tickmarks, font sizes, etc. to make our graph exactly what we need for publication.    We can specify a viewing window using arguments xlim and ylim inside axes_name.set() and graph vectors using axes_name.quiver .       Plot two different parametric curves on the same axes. Your graph should include a title, labelled axes and a legend.  Find a data set with real context and at least 10 values. Plot a scatterplot of the data and the linear regression of the data set. You don't have to use Python to find the regression, but you can if you want. Your graph should include a title, labelled axes and a legend.  Create a figure with two subplots, one visualizing a vector sum, the other visualizing a vector difference. Your graphs should include titles and legends.   "
},
{
  "id": "section-matplotlib-3",
  "level": "2",
  "url": "section-matplotlib.html#section-matplotlib-3",
  "type": "Objectives",
  "number": "1.3",
  "title": "",
  "body": "   Use Matplotlib to graph curves.    Use Matplotlib to make a scatterplot.    Use Matplotlib to graph vectors.    Label the axes on a graph and customize features.    Create multiple subplots.    "
},
{
  "id": "section-matplotlib-5-7",
  "level": "2",
  "url": "section-matplotlib.html#section-matplotlib-5-7",
  "type": "You Try",
  "number": "1.10",
  "title": "",
  "body": "Change both of the above sets of code to whole number inputs from 0 to 6.   What happens to your line?    What happens to your sine curve?    "
},
{
  "id": "section-matplotlib-5-8",
  "level": "2",
  "url": "section-matplotlib.html#section-matplotlib-5-8",
  "type": "You Try",
  "number": "1.11",
  "title": "",
  "body": "Change the above code to use arange() instead of linspace() to set up your inputs. What is the smallest step size that makes the curve look smooth? "
},
{
  "id": "section-matplotlib-5-9",
  "level": "2",
  "url": "section-matplotlib.html#section-matplotlib-5-9",
  "type": "You Try",
  "number": "1.12",
  "title": "",
  "body": "Change the above code to graph with a traditional input window like [-10,10]. "
},
{
  "id": "section-matplotlib-5-12",
  "level": "2",
  "url": "section-matplotlib.html#section-matplotlib-5-12",
  "type": "You Try",
  "number": "1.13",
  "title": "",
  "body": "Notice that if you don't specify the inputs, pyplot uses a default set instead. Change the above code and remove the second call for the inputs X in graph.plot(). What is the default input window pyplot uses for Y2? "
},
{
  "id": "section-matplotlib-5-13",
  "level": "2",
  "url": "section-matplotlib.html#section-matplotlib-5-13",
  "type": "You Try",
  "number": "1.14",
  "title": "",
  "body": "Change the above code to add a third function on the same graph. "
},
{
  "id": "subsec-scatterplots-3",
  "level": "2",
  "url": "section-matplotlib.html#subsec-scatterplots-3",
  "type": "You Try",
  "number": "1.15",
  "title": "",
  "body": "Adjust the code in any plot above to make it into a scatter plot instead.  Replace ax.plot() with ax.scatter() in the code.  "
},
{
  "id": "section-matplotlib-7-6",
  "level": "2",
  "url": "section-matplotlib.html#section-matplotlib-7-6",
  "type": "You Try",
  "number": "1.16",
  "title": "",
  "body": "Note that the above code graphs the unit circle. Play with the above functions for and to see what other interesting curves you can graph. In particular, when you have the parameter , can you create  a line?  a different circle?  a parabola?   "
},
{
  "id": "labels-5",
  "level": "2",
  "url": "section-matplotlib.html#labels-5",
  "type": "You Try",
  "number": "1.17",
  "title": "",
  "body": "Search online for a way to change the tick labels in Matplotlib. Try and adjust the \"Falling Body\" graph to have tickmarks every half second. "
},
{
  "id": "subsec-Vectorsin2D-4",
  "level": "2",
  "url": "section-matplotlib.html#subsec-Vectorsin2D-4",
  "type": "You Try",
  "number": "1.18",
  "title": "",
  "body": "Try various viewing windows in the above code. What do you notice about the size of your arrow? "
},
{
  "id": "subsec-Vectorsin2D-7",
  "level": "2",
  "url": "section-matplotlib.html#subsec-Vectorsin2D-7",
  "type": "You Try",
  "number": "1.19",
  "title": "",
  "body": "Try various vectors and viewing windows in the above code. "
},
{
  "id": "subsec-Vectorsin2D-10",
  "level": "2",
  "url": "section-matplotlib.html#subsec-Vectorsin2D-10",
  "type": "You Try",
  "number": "1.20",
  "title": "",
  "body": "Try various vectors and viewing windows in the above code. Also add a horizontal and vertical axis at and using the code found in the second Customizing example. "
},
{
  "id": "exercises-matplotlib2D-1",
  "level": "2",
  "url": "section-matplotlib.html#exercises-matplotlib2D-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "Plot two different parametric curves on the same axes. Your graph should include a title, labelled axes and a legend. "
},
{
  "id": "exercises-matplotlib2D-2",
  "level": "2",
  "url": "section-matplotlib.html#exercises-matplotlib2D-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "Find a data set with real context and at least 10 values. Plot a scatterplot of the data and the linear regression of the data set. You don't have to use Python to find the regression, but you can if you want. Your graph should include a title, labelled axes and a legend. "
},
{
  "id": "exercises-matplotlib2D-3",
  "level": "2",
  "url": "section-matplotlib.html#exercises-matplotlib2D-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "Create a figure with two subplots, one visualizing a vector sum, the other visualizing a vector difference. Your graphs should include titles and legends. "
},
{
  "id": "section-matplotlib3d",
  "level": "1",
  "url": "section-matplotlib3d.html",
  "type": "Section",
  "number": "1.4",
  "title": "Matplotlib and 3D graphing",
  "body": " Matplotlib and 3D graphing   Now that we have some experience making 2D graphs, let's learn how to make 3D graphs. Note that we can graph both curves and surfaces in 3D. If you have taken a multivariable class hopefully you remember that surfaces arise as solutions to equations of three variables, while points on a space curve are parametric equations or vector-valued functions. The code for the points on a space curve is a little more straightforward so we will start with those examples.      Use Matplotlib to graph parametric curves in 3D.    Use Matplotlib to graph surfaces and scatterplots in 3D.      3D axes  First, for 3D graphs we will need to add 3D plots to our figure using the keyword projection='3d' . Read through and run the code below to see the default 3D axes.     Parametric Curves in 3D  Matplotlib graphs 3D curves by plotting points and connecting the dots. The , , and coordinates are still given by numpy arrays and then plotted on the axes.  Run the code below to graph the equation of a line between the points and .   Edit the above code to graph the equation of a line between the points and .  Edit the above code to add a third number to each numpy array. What happens? Can you explain what plot() just graphed?  We can also graph curves by making coordinates dependent on another. For example, the curve below looks like a parabola in the -direction above the shadow    As before, we need enough input points to get a smooth curve.  Parametric curves in 3D are just like 2D (see ( )) with an added -coordinate. For example, we can graph a horizontal circle at using              Play with the above code for , , and to see what other interesting curves you can create. In 3-space can you graph  a line?  a spiral?  a different circle?      Surfaces and scatterplots in 3D  To graph a surface or 3D scatterplot, we will need two-dimensional numpy arrays for all of our inputs and outputs. As a shortcut we can create 1D arrays for the and inputs first, then use NumPy's function meshgrid() to create a coordinate grid of inputs (two 2D arrays). Last we define our outputs on that coordinate grid.  The function scatter() will plot a scatterplot just like in 2D. The function plot_surface() plots the points and connect those dots with a surface. Just like we need enough points to get a curve that looks smooth, we will need enough points to get a surface that looks smooth.  Run the code below trying both the command plot_surface() (current default) and scatter() to see the difference.   For the surface, increase the step in each input and run the above code again. When does the surface start to look polygonal instead of smooth?  Modify the above code to graph the surface . Choose a reasonable range of inputs that shows the important features of the graph.  Change the surface to . What step size is needed to make the input window [-2,2] and [-2,2] display a smooth surface?  As in the 2D case, the function scatter() plots the points without connecting the dots.    Axes and Labels  Adding titles or labels to our 3D axes uses the same commands as in 2D. the commands set_title(\"title_here\") , set_xlabel(\"label_here\") , set_ylabel(\"label_here\") .   In the above code, use parallel syntax to add a label to the -axis.  Note that the default viewing window makes the -axis positive left to right and -axis positive front to back. Something new in the 3D setting, however, is the ability to choose our viewing angle for the 3D axes using view_init(elev= , azim=, roll=) .  In the code below, play with the values for elev , azim and roll .   What does each change?  What custom viewing angle do you think showcases this particular surface the best?       Plotting Multiple Surfaces  Unfortunately Matplotlib does NOT actually graph in 3D, but paints each surface in a 2D projection, one on top of the other, which can cause the resulting graphs to look weird. Sometimes it is enough to change the viewing angle.  In the above code add a second surface to your graph using Z2 for the new outputs and ax.plot_surface(X,Y,Z2) .   Can you find a viewing angle where both surfaces look good?    Can you find a viewing angle where they don't quite look right?     A possible workaround involves making the surfaces transparent and plotting their intersection as well. If you find another workaround that is fairly simple and doesn't involve dark magic and paying with programmer souls as one stack overflow user suggested, let us know and we can include it in future iterations of this book.  Run the code below to see a Matplotlib 3D fail.   You can make your graphs transparent using the argument alpha = inside plot_surface .  In the code above add alpha=0.5 after each of Z1, Z2, and Z3 inside plot_surface to see a partial fix. Play with values of alpha to see which transparency setting you prefer. You can also graph the lines of intersection for each plane, which we will do later in the term.    Customizing  Like in 2D, we can customize our plots: the style, colors, markers, meshes, contours, line width, etc. There are many features available that we didn't cover here, but hopefully you have enough to get you started with 3D graphing using Matplotlib in Python.  So how do you learn more?  Look up Matplotlib's documentation on the web and find their page of examples, 3D plotting . Pick a 3D graph you want to learn to code and use the cell below to try it out. How is what you found different than what you learned in this section? Experiment by adjusting Matplotlib's example code to see what happens.     This section gave us just an introduction to 3D graphing possibilities using Matplotlib in Python. We will continue to learn more about graphing as we move into using Python for matrix algebra.    Summary     We can add 3D graphs and axes using the argument projection='3d' inside pyplot's axes command.    We can plot curves using plot() and three numpy arrays representing the , , and -coordinates for points on our curve.    We can use numpy.meshgrid() to create input coordinates on a grid and then use plot_surface() or scatter() to plot a surface or scatter plot on 3D axes.    As before we need enough points for plot_surface() or plot() to make smooth graphs.       The function meshgrid() has other uses, so it is nice to familiarize yourself with what it actually does. First make two small Numpy arrays, say one, X, with three entries and the other, Y, with five entries. Next make a meshgrid() of those two arrays and print the result. What do you notice?    Experiment with different sizes of arrays X and Y. Explain in your own words what meshgrid does with the two arrays. Demonstrate with some example code.    What happens if you multiply the arrays that result from meshgrid together? Demonstrate with some example code.     In one figure create a gallery of examples containing at least one of each:   A curve in 3D    A suface in 3D    A scatterplot in 3D   Make sure your graphs are appropriately labelled for your reader.  Look up Matplotlib’s documentation on the web and find their page of examples, 3D plotting. Pick a 3D graph you want to learn to code and try it out. Experiment with the code to make it your own. How is what you found different than what you learned in this section? Explain.  NumPy's meshgrid() will be used later to create a grid of points that we transform. Use meshgrid() to create a grid of x and y-values.   Print out the arrays from meshgrid() . How does one array encode the increasing vs constant x-values? How does the other array encode the increasing vs constant y-values?    Make a 2D scatterplot using just your two arrays from meshgrid() . Explain how this graph relates to your answer in part (a).    Plot a grid of vertical and horizontal lines in by extracting the appropriate rows and columns from your meshgrid() . We will use a related approach in to visualize matrix transformations.       "
},
{
  "id": "section-matplotlib3d-3",
  "level": "2",
  "url": "section-matplotlib3d.html#section-matplotlib3d-3",
  "type": "Objectives",
  "number": "1.4",
  "title": "",
  "body": "   Use Matplotlib to graph parametric curves in 3D.    Use Matplotlib to graph surfaces and scatterplots in 3D.    "
},
{
  "id": "subsec-3DParam-5",
  "level": "2",
  "url": "section-matplotlib3d.html#subsec-3DParam-5",
  "type": "You Try",
  "number": "1.21",
  "title": "",
  "body": "Edit the above code to graph the equation of a line between the points and . "
},
{
  "id": "subsec-3DParam-6",
  "level": "2",
  "url": "section-matplotlib3d.html#subsec-3DParam-6",
  "type": "You Try",
  "number": "1.22",
  "title": "",
  "body": "Edit the above code to add a third number to each numpy array. What happens? Can you explain what plot() just graphed? "
},
{
  "id": "subsec-3DParam-12",
  "level": "2",
  "url": "section-matplotlib3d.html#subsec-3DParam-12",
  "type": "You Try",
  "number": "1.23",
  "title": "",
  "body": "Play with the above code for , , and to see what other interesting curves you can create. In 3-space can you graph  a line?  a spiral?  a different circle?   "
},
{
  "id": "subsec-Graphing-a-surface-4",
  "level": "2",
  "url": "section-matplotlib3d.html#subsec-Graphing-a-surface-4",
  "type": "You Try",
  "number": "1.24",
  "title": "",
  "body": "Run the code below trying both the command plot_surface() (current default) and scatter() to see the difference. "
},
{
  "id": "subsec-Graphing-a-surface-6",
  "level": "2",
  "url": "section-matplotlib3d.html#subsec-Graphing-a-surface-6",
  "type": "You Try",
  "number": "1.25",
  "title": "",
  "body": "For the surface, increase the step in each input and run the above code again. When does the surface start to look polygonal instead of smooth? "
},
{
  "id": "subsec-Graphing-a-surface-7",
  "level": "2",
  "url": "section-matplotlib3d.html#subsec-Graphing-a-surface-7",
  "type": "You Try",
  "number": "1.26",
  "title": "",
  "body": "Modify the above code to graph the surface . Choose a reasonable range of inputs that shows the important features of the graph. "
},
{
  "id": "subsec-Graphing-a-surface-8",
  "level": "2",
  "url": "section-matplotlib3d.html#subsec-Graphing-a-surface-8",
  "type": "You Try",
  "number": "1.27",
  "title": "",
  "body": "Change the surface to . What step size is needed to make the input window [-2,2] and [-2,2] display a smooth surface? "
},
{
  "id": "subsec-3DAxesandLabels-4",
  "level": "2",
  "url": "section-matplotlib3d.html#subsec-3DAxesandLabels-4",
  "type": "You Try",
  "number": "1.28",
  "title": "",
  "body": "In the above code, use parallel syntax to add a label to the -axis. "
},
{
  "id": "subsec-3DAxesandLabels-6",
  "level": "2",
  "url": "section-matplotlib3d.html#subsec-3DAxesandLabels-6",
  "type": "You Try",
  "number": "1.29",
  "title": "",
  "body": "In the code below, play with the values for elev , azim and roll .   What does each change?  What custom viewing angle do you think showcases this particular surface the best?   "
},
{
  "id": "subsec-multiplesurfaces-3",
  "level": "2",
  "url": "section-matplotlib3d.html#subsec-multiplesurfaces-3",
  "type": "You Try",
  "number": "1.30",
  "title": "",
  "body": "In the above code add a second surface to your graph using Z2 for the new outputs and ax.plot_surface(X,Y,Z2) .   Can you find a viewing angle where both surfaces look good?    Can you find a viewing angle where they don't quite look right?    "
},
{
  "id": "subsec-multiplesurfaces-5",
  "level": "2",
  "url": "section-matplotlib3d.html#subsec-multiplesurfaces-5",
  "type": "You Try",
  "number": "1.31",
  "title": "",
  "body": "Run the code below to see a Matplotlib 3D fail. "
},
{
  "id": "subsec-multiplesurfaces-8",
  "level": "2",
  "url": "section-matplotlib3d.html#subsec-multiplesurfaces-8",
  "type": "You Try",
  "number": "1.32",
  "title": "",
  "body": "In the code above add alpha=0.5 after each of Z1, Z2, and Z3 inside plot_surface to see a partial fix. Play with values of alpha to see which transparency setting you prefer. You can also graph the lines of intersection for each plane, which we will do later in the term. "
},
{
  "id": "exercises-matplotlib3D-1",
  "level": "2",
  "url": "section-matplotlib3d.html#exercises-matplotlib3D-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "The function meshgrid() has other uses, so it is nice to familiarize yourself with what it actually does. First make two small Numpy arrays, say one, X, with three entries and the other, Y, with five entries. Next make a meshgrid() of those two arrays and print the result. What do you notice?    Experiment with different sizes of arrays X and Y. Explain in your own words what meshgrid does with the two arrays. Demonstrate with some example code.    What happens if you multiply the arrays that result from meshgrid together? Demonstrate with some example code.    "
},
{
  "id": "exercises-matplotlib3D-2",
  "level": "2",
  "url": "section-matplotlib3d.html#exercises-matplotlib3D-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "In one figure create a gallery of examples containing at least one of each:   A curve in 3D    A suface in 3D    A scatterplot in 3D   Make sure your graphs are appropriately labelled for your reader. "
},
{
  "id": "exercises-matplotlib3D-3",
  "level": "2",
  "url": "section-matplotlib3d.html#exercises-matplotlib3D-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "Look up Matplotlib’s documentation on the web and find their page of examples, 3D plotting. Pick a 3D graph you want to learn to code and try it out. Experiment with the code to make it your own. How is what you found different than what you learned in this section? Explain. "
},
{
  "id": "exercises-matplotlib3D-4",
  "level": "2",
  "url": "section-matplotlib3d.html#exercises-matplotlib3D-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "NumPy's meshgrid() will be used later to create a grid of points that we transform. Use meshgrid() to create a grid of x and y-values.   Print out the arrays from meshgrid() . How does one array encode the increasing vs constant x-values? How does the other array encode the increasing vs constant y-values?    Make a 2D scatterplot using just your two arrays from meshgrid() . Explain how this graph relates to your answer in part (a).    Plot a grid of vertical and horizontal lines in by extracting the appropriate rows and columns from your meshgrid() . We will use a related approach in to visualize matrix transformations.     "
},
{
  "id": "section-animation",
  "level": "1",
  "url": "section-animation.html",
  "type": "Section",
  "number": "1.5",
  "title": "Basic Animation",
  "body": " Basic Animation  In this section we will create some basic animations in Matplotlib. Static graphs convey a lot of information in one visual. The right animation can help you convey complicated information simply.     Create for loops and user-defined functions to repeat or reuse code.    Create a gif animating a graph.    Create an mp4 animating a graph.    Create an interactive plot with a slider.     Matplotlib has a module called animation that uses frames of a changing graph to create gif and mp4 files. First, however, we will need to learn about for loops and user-defined functions to efficiently repeat and reuse code. Animation is basically a slideshow of pictures or frames.    Repeating blocks of code with for loops  A for loop repeats a block of code for each item in a list or array. The code below uses a for loop to add elements to an array one at a time.   Note that we converted the Python list into a Numpy array before printing. NumPy also has an append function that effectively recreates the entire array before appending which is inefficient in a for loop.    Edit the code above and see what changes if you don't convert the list to a NumPy array.    Edit the code above to create an array of even numbers between 0 and 10 using a for loop.    You can change the value of a variable as you iterate through a for loop to repeatedly perform a computation.  Edit the code below to add up all the entries in the given NumPy array.     Creating a gif in Matplotlib  We can use for loops for a simple animation by iterating through frames of a changing graph and writing each frame to a gif file using animation 's class PillowWriter .  There are many ways to alter a graph over time. For this example we will start with an empty graph and draw the curve by adding points one at a time.   You might have noticed an oddly placed comma in the above code. Essentially ax.plot returns a list\/tuple with one element. The comma allows us to unpack the first element in the list and name it curve, which will be the plotted curve that gets modified in each frame.    Play with various graph features and customizations.    Add a title and labels to your graph.      Change the dpi and see how the gif is affected.    Change the frames per second and see how the gif is affected.    Here is an example animating two curves on the same axes object.     Reusing blocks of code with user-defined functions  A Python function accepts inputs as arguments and can output through a return statement. For example, numpy.sum() takes in an array and returns the sum of the values in that array (along an axis). When we want to reuse code in multiple places, we can create a user-defined function with def .  The user-defined function below takes in a radius and outputs the area of a circle.   The signature decides the name of the function and how many arguments the function requires. The next line documents what the function does, triple quoted so you can use multiple lines. Next is the body of code the function runs when called. Once compiled, user defined functions can be called just like any other Python function.    Edit the code above to compute the area of a different circle.    What error do you get if you add print(area) to the above code?    Note that variables defined inside a function are local to that function.   User-defined functions organize code into more manageable chunks. If we find ourselves repeating blocks of code, we should probably use a function instead.    Creating an mp4 in Matplotlib  In matplotlib's animation , a class called FuncAnimation can be used to create mp4s. FuncAnimation takes a matplotlib figure and uses frames to iterate through a user-defined function that alters elements of the graph, and saving as an mp4.   The argument frames is always iteratively passed into the user-defined function with a hidden for loop and can just be an integer. Meanwhile the argument interval determines the delay between frames in milliseconds and blit chooses whether FuncAnimation recreates the entire figure every frame, or just updates the altered graph elements for efficiency.   Edit the code above to create an mp4 that draws both a sine wave and a cosine wave.   Creating an interactive slider  We can also use interact to create a slider that plots one point at a time. We will need two user-defined functions, one that increments through the input points for the slider and another that plots the graph for just those input points.     Play with various graph features and customizations.    Change the number of frames to see how the interactive is affected.    Try aligning and misaligning the number of frames and the number of inputs plotted.   Here is the same interactive for projectile motion.     Matplotlib allows you to not only graph, but make your graphs interactive. You can use interact to create interactive elements. The animation module can be used to animate your graphs. Hopefully this is enough to get you started.    Summary     For loops can be used to animate your graphs and PillowWriter saves those frames into a gif.    The FuncAnimation class and a user-defined function can be used to animate your graph and save frames to an mp4.      We can use interact to create a slider element and create two user defined functions: one that takes the slider information to create points and another that makes graphs for just those points.       Animate a 3D graph.  Showcase your skills from so far in the term to create an animated graph in Matplotlib for any other class (and using one feature we haven't learned in class).  What graph do you want to animate? Create it!   "
},
{
  "id": "section-animation-3",
  "level": "2",
  "url": "section-animation.html#section-animation-3",
  "type": "Objectives",
  "number": "1.5",
  "title": "",
  "body": "   Create for loops and user-defined functions to repeat or reuse code.    Create a gif animating a graph.    Create an mp4 animating a graph.    Create an interactive plot with a slider.    "
},
{
  "id": "section-animation-5-5",
  "level": "2",
  "url": "section-animation.html#section-animation-5-5",
  "type": "You Try",
  "number": "1.33",
  "title": "",
  "body": "  Edit the code above and see what changes if you don't convert the list to a NumPy array.    Edit the code above to create an array of even numbers between 0 and 10 using a for loop.   "
},
{
  "id": "section-animation-5-7",
  "level": "2",
  "url": "section-animation.html#section-animation-5-7",
  "type": "You Try",
  "number": "1.34",
  "title": "",
  "body": "Edit the code below to add up all the entries in the given NumPy array. "
},
{
  "id": "section-animation-6-6",
  "level": "2",
  "url": "section-animation.html#section-animation-6-6",
  "type": "You Try",
  "number": "1.35",
  "title": "",
  "body": "  Play with various graph features and customizations.    Add a title and labels to your graph.   "
},
{
  "id": "section-animation-6-7",
  "level": "2",
  "url": "section-animation.html#section-animation-6-7",
  "type": "You Try",
  "number": "1.36",
  "title": "",
  "body": "  Change the dpi and see how the gif is affected.    Change the frames per second and see how the gif is affected.   "
},
{
  "id": "section-animation-7-6",
  "level": "2",
  "url": "section-animation.html#section-animation-7-6",
  "type": "You Try",
  "number": "1.37",
  "title": "",
  "body": "  Edit the code above to compute the area of a different circle.    What error do you get if you add print(area) to the above code?    Note that variables defined inside a function are local to that function.  "
},
{
  "id": "section-animation-9",
  "level": "2",
  "url": "section-animation.html#section-animation-9",
  "type": "You Try",
  "number": "1.38",
  "title": "",
  "body": "Edit the code above to create an mp4 that draws both a sine wave and a cosine wave. "
},
{
  "id": "subsec-interactive-slider-4",
  "level": "2",
  "url": "section-animation.html#subsec-interactive-slider-4",
  "type": "You Try",
  "number": "1.39",
  "title": "",
  "body": "  Play with various graph features and customizations.    Change the number of frames to see how the interactive is affected.    Try aligning and misaligning the number of frames and the number of inputs plotted.  "
},
{
  "id": "exercises-animation-1",
  "level": "2",
  "url": "section-animation.html#exercises-animation-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "Animate a 3D graph. "
},
{
  "id": "exercises-animation-2",
  "level": "2",
  "url": "section-animation.html#exercises-animation-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "Showcase your skills from so far in the term to create an animated graph in Matplotlib for any other class (and using one feature we haven't learned in class). "
},
{
  "id": "exercises-animation-3",
  "level": "2",
  "url": "section-animation.html#exercises-animation-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "What graph do you want to animate? Create it! "
},
{
  "id": "section-showcase",
  "level": "1",
  "url": "section-showcase.html",
  "type": "Section",
  "number": "1.6",
  "title": "Student Showcase",
  "body": " Student Showcase   Former students gave us permission to share some of their work.      Showcase student work and provide additional examples for future students.      Anonymous .gif (Spring 2024)     Luke Clark interactive (Spring 2024)     Jacob DeWilde interactive (Spring 2024)     Ben Cantarero .gif (Spring 2024)     As the course has grown the book has improved, but students have been creating wonderful animations from the start.   "
},
{
  "id": "section-showcase-3",
  "level": "2",
  "url": "section-showcase.html#section-showcase-3",
  "type": "Objectives",
  "number": "1.6",
  "title": "",
  "body": "   Showcase student work and provide additional examples for future students.    "
},
{
  "id": "section-showcase-4",
  "level": "2",
  "url": "section-showcase.html#section-showcase-4",
  "type": "Example",
  "number": "1.40",
  "title": "Anonymous .gif (Spring 2024).",
  "body": " Anonymous .gif (Spring 2024)   "
},
{
  "id": "section-showcase-5",
  "level": "2",
  "url": "section-showcase.html#section-showcase-5",
  "type": "Example",
  "number": "1.41",
  "title": "Luke Clark interactive (Spring 2024).",
  "body": " Luke Clark interactive (Spring 2024)   "
},
{
  "id": "section-showcase-6",
  "level": "2",
  "url": "section-showcase.html#section-showcase-6",
  "type": "Example",
  "number": "1.42",
  "title": "Jacob DeWilde interactive (Spring 2024).",
  "body": " Jacob DeWilde interactive (Spring 2024)   "
},
{
  "id": "section-showcase-7",
  "level": "2",
  "url": "section-showcase.html#section-showcase-7",
  "type": "Example",
  "number": "1.43",
  "title": "Ben Cantarero .gif (Spring 2024).",
  "body": " Ben Cantarero .gif (Spring 2024)   "
},
{
  "id": "section-systems",
  "level": "1",
  "url": "section-systems.html",
  "type": "Section",
  "number": "2.1",
  "title": "Solving and Graphing Systems of Linear Equations",
  "body": " Solving and Graphing Systems of Linear Equations  Systems of linear equations can be solved using multiple methods. In this section we will learn how to solve systems of linear equations using a process called row reduction. Row reduction is sometimes called Gaussian elimination, after the mathematician Gauss, whose notation was adopted by . The method was actually popularized in Europe by Cambridge University who published notes of Newton. Soon algebra textbooks across Europe included the method. Long before Gauss or Newton, Chinese scholars demonstrated this method of solving systems of linear equations in chapter 8 of The Nine Chapters on the Mathematical Art.       Row reduce matrices representing systems of linear equations using the Python library Sympy.    Graph solutions to systems of linear equations of two or three variables.    Graph solutions to vector equations in and .    Use the pivots of a reduced augmented matrix to determine if a system has no solution, a unique solution, or infinitely many solutions      Row Reduction  Note that row reduction involves symbolic manipulation. Since Numpy is focused on number crunching, we will need a different Python library called Sympy to do the symbolic manipulation of row reduction to reduced echelon form and row reduced echelon form.  In order to row reduce a system of linear equations we convert our system into an augmented matrix.   Augmented Matrix   For example, the system becomes     In Sympy, matrices are entered using the function Matrix .   Edit the above code to print the augmented matrix for the system of linear equations in .  Note that sympy will automatically convert decimals to floating point numbers. Often it is helpful to keep fractions exact using sympy's Rational(a,b) command.  Edit the above code to print a matrix with decimals like or . Also print a matrix with fractions like and using sympy's Rational(a,b) command.  Note that Rational(a,b) is not a Python command, but rather a command specific to Sympy.   The Sympy functions echelon_form() and rref() can be used to row reduce a matrix to reduced echelon form and row reduced echelon form, respectively. If you need a refresher on these two forms, read Section 1.2 of Interactive Linear Algebra.  Edit the code below to print the reduced echelon form and the row reduced echelon form for the augmented matrix of the system of linear equations from .   Note that rref() returns not only the row reduced echelon form of a matrix, but also a tuple that tells you which columns have leading values of 1 (where the left-most column is column 0). These columns are called pivot columns , and give you a quick way to see any free variables (which are non-pivot columns).  Edit the code above for various augmented matrices to see how the tuple returned by rref() relates to the pivot columns.  Recall that a system of linear equations either has   no solution,    a unique solution, or    infinitely many solutions.   If you need a refresher on how to interpret the reduced echelon form of an augmented matrix to determine if there is no solution, write down the unique solution, or give the infinitely many solutions in parametric form, see MTH 264 class notes Lesson 3.    Graphing solutions to systems of equations  In order to graph solutions to systems of linear equations with two or three variables you can graph the corresponding lines, planes, or coordinates.   The system has solutions and .  Linear equations with two variables can be graphed as lines in the xy-plane, either by plotting two points on the line or solving for . The solution is one point in a scatter plot.    Edit the code in to clearly indicate the solution and on the graph.  Systems of equations with three variables must be graphed in 3D. As mentioned in , Matplotlib paints 2D projections of each surface on top of the other which doesn't adequately graph their relationships. We can partially fix this by making the surfaces transparent and explicitly plotting their intersections. The intersection of any two non-parallel planes is a line which can be found by solving the system of the two plane equations and writing the solution in parametric form.   Graph solutions to the system by finding the equations of the lines of intersection of the planes and plotting the planes, the lines, and the point of intersection.  Solution 1 walks through the process, followed by a Python implementation of the rref() .   First row reducing the augmented matrix for the system of all three equations we obtain a unique solution , , .  Row reducing the augmented matrix for the first two equations we obtain which can be written in parametric form,   Row reducing the augmented matrix for the last two equations we obtain which can be written in parametric form,   Row reducing the augmented matrix for the first and last equations we obtain which can be written in parametric form,     Next we will use Matplotlib to graph these results. First note that if we are careless with our input domains for the planes and lines, our graph will be inconsistent.   Note: you can change the viewing angle to try and get a better graph.  The real problem in the code above is that we graph our surfaces with domain and , but use for the parametric equation of our lines. There are several fixes for this.  One fix is to adjust the parametric input values for the lines to better match the planes. For example, you can make to get a more consistent graph. Try several adjustments for the range in the above code. To get a fully consistent graph, each line would need a different parametric domain that matches the domain of the planes.  Another fix is to solve each pair of equations for two points on the line in the domain of the planes. You can then plot the line between the two points.  Solution 2 walks through the process of finding the points, followed by an alternative Python implementation to graph the solutions.   Recall the first two equations intersect in the line Solving for when , we see . Plugging into the parametric equation for the line we obtain the point . Similarly when , we find , giving the point .  The last two equations intersect in the line Here is always . Instead we solve for when and . We find and , giving us the two points and .  The first and last equations intersect in the line Here when giving us the points and .  Recall to plot the lines between two points we create arrays of the -values, -values, and -values, then plot the line between them.    Can you find other fixes? If so, share them so we can add them here.      Graphing vector equations and their solutions  Recall that solving a vector equation is equivalent to solving a system of equations.   For example the vector equation corresponds to the linear system found in and still has solution and .  The solution to the vector equation can be graphed using linear combinations of vectors. That is,       Converting between Numpy arrays and Sympy Matrices  Since Numpy and Sympy are different libraries, we will need to either enter our augmented matrix as a Sympy matrix, or convert a numpy array into a sympy matrix in order to call the row reducing function in Sympy.  Note that Numpy matrices can be coded as 2D Numpy arrays.     Round-off error in Sympy's rref()  Whenever you use a computer to perform arithmetic you have to consider round-off error. Numbers in Python are either stored as an integer data type, a floating point number data type, or a complex number data type. Although has a finite decimal representation, in binary it requires an infinite repeating floating point representation which cannot be stored without being truncated or rounded.   Consider the system of equations If you multiply both sides of each equation by 10, you don't change the solutions to the equations. If you use Sympy to row reduce the system, however, you get a different answer.  A possible fix for the floating point round-off error is to tell Sympy explicitly when to round to zero by making a user defined iszerofunc .   Sympy's rational number data type stores fractions as two integers to avoid floating point representation. Fix the row reduction round-off error for the original system in by using Sympy's Rational() function instead.    Summary     TBD      TBD       The system has a unique solution. Use Python code to find the solution. Graph the system of equations and the solution using Matplot3D. Lable your axes. Note: part of the challenge is making sure you have a good viewing window and perspective so the graph helps illuminate the solution.   Consider the system Convert the system of linear equations to a vector equation. Find the unique solution and graph your answer as a vector equation using Matplotlib3D. (That is, use vectors instead of planes to visualize the solution to this system.)   "
},
{
  "id": "section-systems-3",
  "level": "2",
  "url": "section-systems.html#section-systems-3",
  "type": "Objectives",
  "number": "2.1",
  "title": "",
  "body": "   Row reduce matrices representing systems of linear equations using the Python library Sympy.    Graph solutions to systems of linear equations of two or three variables.    Graph solutions to vector equations in and .    Use the pivots of a reduced augmented matrix to determine if a system has no solution, a unique solution, or infinitely many solutions    "
},
{
  "id": "augmatrix",
  "level": "2",
  "url": "section-systems.html#augmatrix",
  "type": "Example",
  "number": "2.1",
  "title": "Augmented Matrix.",
  "body": " Augmented Matrix   For example, the system becomes    "
},
{
  "id": "rref-7",
  "level": "2",
  "url": "section-systems.html#rref-7",
  "type": "You Try",
  "number": "2.2",
  "title": "",
  "body": "Edit the above code to print the augmented matrix for the system of linear equations in . "
},
{
  "id": "rref-9",
  "level": "2",
  "url": "section-systems.html#rref-9",
  "type": "You Try",
  "number": "2.3",
  "title": "",
  "body": "Edit the above code to print a matrix with decimals like or . Also print a matrix with fractions like and using sympy's Rational(a,b) command.  Note that Rational(a,b) is not a Python command, but rather a command specific to Sympy.  "
},
{
  "id": "rref-11",
  "level": "2",
  "url": "section-systems.html#rref-11",
  "type": "You Try",
  "number": "2.4",
  "title": "",
  "body": "Edit the code below to print the reduced echelon form and the row reduced echelon form for the augmented matrix of the system of linear equations from . "
},
{
  "id": "rref-14",
  "level": "2",
  "url": "section-systems.html#rref-14",
  "type": "You Try",
  "number": "2.5",
  "title": "",
  "body": "Edit the code above for various augmented matrices to see how the tuple returned by rref() relates to the pivot columns. "
},
{
  "id": "twodsolutions",
  "level": "2",
  "url": "section-systems.html#twodsolutions",
  "type": "Example",
  "number": "2.6",
  "title": "",
  "body": " The system has solutions and .  Linear equations with two variables can be graphed as lines in the xy-plane, either by plotting two points on the line or solving for . The solution is one point in a scatter plot.   "
},
{
  "id": "graphsolution-4",
  "level": "2",
  "url": "section-systems.html#graphsolution-4",
  "type": "You Try",
  "number": "2.7",
  "title": "",
  "body": "Edit the code in to clearly indicate the solution and on the graph. "
},
{
  "id": "threedsolutions1",
  "level": "2",
  "url": "section-systems.html#threedsolutions1",
  "type": "Example",
  "number": "2.8",
  "title": "",
  "body": " Graph solutions to the system by finding the equations of the lines of intersection of the planes and plotting the planes, the lines, and the point of intersection.  Solution 1 walks through the process, followed by a Python implementation of the rref() .   First row reducing the augmented matrix for the system of all three equations we obtain a unique solution , , .  Row reducing the augmented matrix for the first two equations we obtain which can be written in parametric form,   Row reducing the augmented matrix for the last two equations we obtain which can be written in parametric form,   Row reducing the augmented matrix for the first and last equations we obtain which can be written in parametric form,     Next we will use Matplotlib to graph these results. First note that if we are careless with our input domains for the planes and lines, our graph will be inconsistent.   Note: you can change the viewing angle to try and get a better graph.  The real problem in the code above is that we graph our surfaces with domain and , but use for the parametric equation of our lines. There are several fixes for this.  One fix is to adjust the parametric input values for the lines to better match the planes. For example, you can make to get a more consistent graph. Try several adjustments for the range in the above code. To get a fully consistent graph, each line would need a different parametric domain that matches the domain of the planes.  Another fix is to solve each pair of equations for two points on the line in the domain of the planes. You can then plot the line between the two points.  Solution 2 walks through the process of finding the points, followed by an alternative Python implementation to graph the solutions.   Recall the first two equations intersect in the line Solving for when , we see . Plugging into the parametric equation for the line we obtain the point . Similarly when , we find , giving the point .  The last two equations intersect in the line Here is always . Instead we solve for when and . We find and , giving us the two points and .  The first and last equations intersect in the line Here when giving us the points and .  Recall to plot the lines between two points we create arrays of the -values, -values, and -values, then plot the line between them.    Can you find other fixes? If so, share them so we can add them here.   "
},
{
  "id": "section-systems-6-3",
  "level": "2",
  "url": "section-systems.html#section-systems-6-3",
  "type": "Example",
  "number": "2.9",
  "title": "",
  "body": " For example the vector equation corresponds to the linear system found in and still has solution and .  The solution to the vector equation can be graphed using linear combinations of vectors. That is,    "
},
{
  "id": "rounderror",
  "level": "2",
  "url": "section-systems.html#rounderror",
  "type": "Example",
  "number": "2.10",
  "title": "",
  "body": " Consider the system of equations If you multiply both sides of each equation by 10, you don't change the solutions to the equations. If you use Sympy to row reduce the system, however, you get a different answer.  A possible fix for the floating point round-off error is to tell Sympy explicitly when to round to zero by making a user defined iszerofunc .  "
},
{
  "id": "subsecRoundingErrorRref-4",
  "level": "2",
  "url": "section-systems.html#subsecRoundingErrorRref-4",
  "type": "You Try",
  "number": "2.11",
  "title": "",
  "body": "Sympy's rational number data type stores fractions as two integers to avoid floating point representation. Fix the row reduction round-off error for the original system in by using Sympy's Rational() function instead. "
},
{
  "id": "exercises-systems-1",
  "level": "2",
  "url": "section-systems.html#exercises-systems-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "The system has a unique solution. Use Python code to find the solution. Graph the system of equations and the solution using Matplot3D. Lable your axes. Note: part of the challenge is making sure you have a good viewing window and perspective so the graph helps illuminate the solution.  "
},
{
  "id": "exercises-systems-2",
  "level": "2",
  "url": "section-systems.html#exercises-systems-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "Consider the system Convert the system of linear equations to a vector equation. Find the unique solution and graph your answer as a vector equation using Matplotlib3D. (That is, use vectors instead of planes to visualize the solution to this system.) "
},
{
  "id": "section-matrices",
  "level": "1",
  "url": "section-matrices.html",
  "type": "Section",
  "number": "2.2",
  "title": "Matrix Arithmetic",
  "body": " Matrix Arithmetic  Matrices have emerged as an essential mathematical tool to model complicated systems and solve problems far beyond the early usage to simplify the process of solving systems of linear equations. In this section we will learn how to use both SymPy and NumPy to perform matrix arithmetic. We will also briefly discuss numerical pitfalls to try and avoid.     Add, subtract, scale, and multiply matrices in NumPy and SymPy    Find matrix inverses using NumPy and SymPy    Use matrix inverses to solve systems of linear equations    Discover the pitfalls of ill-conditioned matrices      NumPy vs SymPy  We can compute with matrices in both the Sympy and Numpy libraries. Numerical Python is intended for numerical computations and estimates. Symbolic Python can do symbolic computations like rref() or compute with matrices having undetermined variables in the mix. NumPy automatically treats matrices like a 2D array, that is, a higher dimensional vector. SymPy defaults to working with matrices from the linear transformation perspective.  After some internal debate, I decided to intermingle NumPy and SymPy syntax for working with matrices. Please give feedback if it seems this section should be re-organized into NumPy and Matrics followed by SymPy and Matrices .    Basic Matrices  Some matrices are frequently needed for computations. Common matrices that we can generate automatically include a (multiplicative) identity matrix, a zero matrix, and a matrix of all ones.  The commands for the multiplicative identity matrix are different: SymPy's eye(n) vs NumPy's identity(n) .   The commands for matrices of ones() and zeros() are identical, and take in the number of rows and columns as arguments. For NumPy, however, you must enter the shape of the array as an ordered pair with parentheses.  In the code above, create a matrix of all ones using both NumPy and SymPy. Next create a matrix of all zeroes. Play with various dimensions.  With NumPy don't forget to use extra parentheses for the shape of the array.     Matrix Arithmetic  You can add, subtract and scale matrices using both NumPy and SymPy.  In both NumPy and SymPy create matrices to compute   Scale a one matrix and an identity matrix.     What happens if the two matrices do not have the same number of rows and columns?    Matrix Multiplication  Recall that matrix multiplication is more sophisticated than the Hadamard product, a basic element-wise multiplication of two arrays, since it developed to be independent of coordinates and correspond to function composition. Recall further that NumPy automatically treats matrices like a 2D array, that is, a higher dimensional vector. If you naively multiply NumPy arrays you get the Hadamard product, rather than traditional matrix multiplication (try below).   If instead you want matrix multiplication, you tell NumPy to multiply using the matmul() command, or as a short-hand using @ (try below).   Meanwhile SymPy defaults to working with matrices from the linear transformation perspective giving you matrix multiplication by default and requiring us to specify any Hadamard product, or element-wise multiplication.       What happens if you try to compute using matrix multiplication?    What happens if you try to compute the Hadamard Product of ?     Play with various dimensions of , and to come up with necessary criteria for the Hadamard product to work vs Matrix multiplication to work.  Square matrices can be multiplied by themselves and at times we want to multiply repeatedly, e.g. . In SymPy we can perform repeated matrix multiplication using Python's exponent operator A**3 . In NumPy we can call linalg.matrixpower(matrix, integer power).   Compute Note:      Matrix Inverses  Recall that we can find multiplicative matrix inverses by hand by augmenting a matrix with the identity matrix and row reducing to the identity. Thus we can find a matrix inverse in SymPy simply by applying rref() to a matrix augmented with the identity matrix, which we can not do with NumPy.  Both SymPy and NumPy have a dedicated matrix inverse command, however, NumPy's linalg.inv() and SymPy's inv() .      Solving Matrix Equations via Inverses  We can solve matrix equations using matrix inverses.   Consider the matrix equation where   and   Solve the matrix equation for   Can you compute using both SymPy and NumPy?    Ill-Conditioned Matrices  While inverting a matrix helps us solve matrix equations symbolically and develop theory, in practice, we seldom invert a matrix with technology in order to solve systems of linear equations. Some matrices are ill-conditioned in that small changes what we multiply them by can create big changes in the product. Since rounding produces small changes, ill-conditioned matrices can create terminal errors in our solutions.  Consider the matrix equation in . Compare the solutions obtained in the example, to the solutions if   the entries of are rounded to the nearest hundredth, and    if the entries of are rounded to the nearest tenth, and    if the entries of are rounded to the nearest one.   What do you notice?   In general, matrices that are nearly singular, that is, almost not invertible, can be ill-conditioned. In we will learn how to use determinants to discover whether or not a matrix is singular or close to singular.    Both NumPy and SymPy can be used for matrix arithmetic. Often, however, we are already using NumPy to manipulate or graph our data and the linear algebra tools in NumPy directly are convenient as long as we know what pitfalls to avoid.    Summary     TBD      TBD       Consider the matrix equation where  Compare the solutions if   the entries of are rounded to the nearest hundredth, and    if the entries of are rounded to the nearest tenth, and    if the entries of are rounded to the nearest one.    First use Then use . What do you notice?   "
},
{
  "id": "section-matrices-3",
  "level": "2",
  "url": "section-matrices.html#section-matrices-3",
  "type": "Objectives",
  "number": "2.2",
  "title": "",
  "body": "   Add, subtract, scale, and multiply matrices in NumPy and SymPy    Find matrix inverses using NumPy and SymPy    Use matrix inverses to solve systems of linear equations    Discover the pitfalls of ill-conditioned matrices    "
},
{
  "id": "subsec-BasicMatrices-6",
  "level": "2",
  "url": "section-matrices.html#subsec-BasicMatrices-6",
  "type": "You Try",
  "number": "2.12",
  "title": "",
  "body": "In the code above, create a matrix of all ones using both NumPy and SymPy. Next create a matrix of all zeroes. Play with various dimensions.  With NumPy don't forget to use extra parentheses for the shape of the array.  "
},
{
  "id": "subsec-MatrixArithmetic-3",
  "level": "2",
  "url": "section-matrices.html#subsec-MatrixArithmetic-3",
  "type": "You Try",
  "number": "2.13",
  "title": "",
  "body": "In both NumPy and SymPy create matrices to compute   Scale a one matrix and an identity matrix.  "
},
{
  "id": "subsec-MatrixArithmetic-6",
  "level": "2",
  "url": "section-matrices.html#subsec-MatrixArithmetic-6",
  "type": "You Try",
  "number": "2.14",
  "title": "",
  "body": "What happens if the two matrices do not have the same number of rows and columns? "
},
{
  "id": "subsec-MatrixMultiplication-9",
  "level": "2",
  "url": "section-matrices.html#subsec-MatrixMultiplication-9",
  "type": "You Try",
  "number": "2.15",
  "title": "",
  "body": "   What happens if you try to compute using matrix multiplication?    What happens if you try to compute the Hadamard Product of ?    "
},
{
  "id": "subsec-MatrixMultiplication-10",
  "level": "2",
  "url": "section-matrices.html#subsec-MatrixMultiplication-10",
  "type": "You Try",
  "number": "2.16",
  "title": "",
  "body": "Play with various dimensions of , and to come up with necessary criteria for the Hadamard product to work vs Matrix multiplication to work. "
},
{
  "id": "subsec-MatrixMultiplication-12",
  "level": "2",
  "url": "section-matrices.html#subsec-MatrixMultiplication-12",
  "type": "You Try",
  "number": "2.17",
  "title": "",
  "body": "Compute Note:  "
},
{
  "id": "illconditioned",
  "level": "2",
  "url": "section-matrices.html#illconditioned",
  "type": "Example",
  "number": "2.18",
  "title": "",
  "body": " Consider the matrix equation where   and   Solve the matrix equation for   Can you compute using both SymPy and NumPy? "
},
{
  "id": "ill-conditioned-example-exercise",
  "level": "2",
  "url": "section-matrices.html#ill-conditioned-example-exercise",
  "type": "You Try",
  "number": "2.19",
  "title": "",
  "body": "Consider the matrix equation in . Compare the solutions obtained in the example, to the solutions if   the entries of are rounded to the nearest hundredth, and    if the entries of are rounded to the nearest tenth, and    if the entries of are rounded to the nearest one.   What do you notice? "
},
{
  "id": "exercise-ill-conditioned",
  "level": "2",
  "url": "section-matrices.html#exercise-ill-conditioned",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "Consider the matrix equation where  Compare the solutions if   the entries of are rounded to the nearest hundredth, and    if the entries of are rounded to the nearest tenth, and    if the entries of are rounded to the nearest one.    First use Then use . What do you notice? "
},
{
  "id": "section-transformations",
  "level": "1",
  "url": "section-transformations.html",
  "type": "Section",
  "number": "2.3",
  "title": "Matrix Transformations",
  "body": " Matrix Transformations   Matrix-vector multiplication can fundamentally be interpreted as linear transformations of a vector space. We can directly graph these transformations in and . We can usually generalize our understanding to even though we can't graph the higher dimensions.  Since we will graph in Matplotlib, which uses NumPy arrays, we will default to NumPy (instead of SymPy) for our matrix computations.  In this section we will learn how to      Compute a matrix transformation using NumPy.    Visualize a matrix transformation using basis vectors or a grid in Matplotlib.    Animate a visual of a Matrix Transformation.      Computing Matrix Transformations  We can compute the matrix transformation of a vector simply by using matrix-vector multiplication. Recall that in order to multiply a vector by a matrix, you need a column vector. You can use NumPy's transpose or .T function to convert if needed. Similarly you can use SymPy's Transpose() or .T to convert.    Note the above code throws an error. Use NumPy's transpose() function to make a column vector to fix the error.  You can use transpose(arrayname) , or arrayname.T    Recall that NumPy has an alternate command for matrix multiplication. Alter the above code to use the alternate command.  Because matrix multiplication extends matrix-vector multiplication linearly, we can find the image of multiple input vectors all at once. We simply use the vectors we want to transform as the columns of a matrix, then we can extract their image from the matrix product as the corresponding column.    Change the above code to select a different input vector and compare to the corresponding column of the matrix product.    Visualizing a Matrix Transformation  We can visualize the effect of a transformation by considering the transformed basis vectors. That is, the image of basis vectors under the transformation . We say is the image of the standard basis vector under the transformation . That is, the output of under the transformation, i.e. where gets mapped via . We can then picture the image of any linear combinations of basis vectors using scaling and adding tail to tip. Since every other vector is a linear combination of the basis vectors, that allows us to visualize the image of every vector in the space.  Note that for a square matrix, the image can be visualized in the same space as the domain. We will demonstrate for a transformation using the standard basis.   Transformed Basis Vectors  First we will visualize just the transformed basis vectors.    Edit the code in to consolidate the basis vectors into columns of one matrix instead. Then extract their images under from the resulting matrix product. What do you notice?  To visualize how the rest of the space is transformed, we can use scalar multiples of the standard basis to grid out the space. Since the vector gets mapped to , we can then visualize the result of the transformation using the transformed grid.   Transformed Point Grid  We will first apply to a grid of coordinate dots. While NumPy's meshgrid() works great for plotting a grid of points, the arrays are not the right size to act as input vectors for the matrix-vector multiplication.  For matrix-vector multiplication we need column vectors, and if we want to compute the image of several vectors all at once we need a matrix where each column is one of our vectors. Here we want each column to be a coordinate, having top entry an x-value and bottom entry a corresponding y-value. In other words, we need a matrix with first row the x-values and second row the corresponding y-values. NumPy has a array.reshape(size) function that allows us to reshape each array of x-values and y-values from meshgrid() into rows. We can then vstack() those two rows to form the desired input matrix.    Edit the code in to print every array to see how the same arrays are reshaped, recombined, and transformed.  Print arrays so you can compare X to X1 and Y to Y1. Also compare xygrid to xygrid[i] and xygrid to uvgrid to see the difference.   Edit the code in to make a point grid instead. We used a grid at first so you could print the arrays to follow along. Now we want to generalize to more points.   Note: the argument c= inside scatter tells Matplotlib how to assign colors to our scatterplot. Here we assign colors according to the first array in xygrid. What happens if you assign colors according to the second array inside xygrid?  It can be easier to visualize a matrix transformation using a line grid (or coordinate grid) rather than a collection of points. To use our points to create a grid of lines instead, we need at least two points on each line and we will use plot instead of scatter . Note: horizontal lines have incrementing x-values and constant y-values, while vertical lines have incrementing y-values and constant x-values. We will need to think carefully about which arrays we pass into plot .   Transformed Line Grid  We will build up to the transformed grid a step at a time.  Step 1: First we will learn how to graph a basic grid of lines.   Step 2: Graph a transformed grid of lines.  Now we add in the matrix transformation. Note: in order to find the transformed line grid, we again .reshape() the X,Y grid into a row of x-values and a row of y-values so we can matrix multiply each point as a column of a matrix. We will then .reshape() back into a transformed meshgrid in order to graph our grid of transformed lines.    In the first step of , graphing the basic grid of lines, change the number of lines to 3. Now print each array to better see which array is used for each plot. Why do we need the transpose for our vertical lines?  In the second step of , graphing the transformed grid of lines, change the number of lines to 3. Now print each array to better see which array is used for each plot. What happens if you only increment through the X or the Y and not both?   Coloring the Transformed Line Grid  Unlike scatter which has an argument c=array that allows us to color code based on an x-coordinate or y-coordinate, plot does not. To better see the effects of a reflection, we will use a sequential color map to color our lines.  Step 1: Color a basic grid   Step 2: Color a transformed grid using corresponding coloring.  Below is the corresponding transformed grid with a sequential color map.    If instead the transformation maps higher dimensional vectors to lower dimensional vectors, or vice versa, we can still visualize the transformation.   One approach is to plot two graphs side-by-side color-coded to match: (1) the standard basis (or grid) in the domain and (2)the corresponding transformed basis (or transformed grid) in the co-domain.    Another approach is to embed everything in the higher dimensional space and animate the transformation there. Note: every matrix transformation, say can be extended to a matrix transformation by adding an zero column. (Respectively if we extend to and add a zero row).        Animating Matrix Transformations  What if we wanted to visualize the transformation as a gradual change?  We can think of where we start as applying the identity matrix Meanwhile we can think of where we end as applying the final transformation matrix . We can create intermediate transformation matrices between and by adding complimentary percentages of the identity transformation and our matrix transformation, . We obtain a sliding scale between the two by incrementing through our percentage from 0 to 1, starting with 100% of our identity transformation and ending with 100% of our matrix transformation.   Transformed Basis Vectors with Interactive Slider  First we create a slider that starts with the identity transformation on two basis vectors and gradually gives us the transformation by    Note that in this interactive, we only want the current frame, and not all the frames up to the current frame. Do you know why?   We can animate the gradual transformation using what we learned in . Using PillowWriter we will start with a somewhat simple .gif of the transformation, then add features.   Transformed Basis Vectors with PillowWriter .gif    Comment out plt.cla() in . What happens to your animation?  Add a title, grid, and legend to the animation in . Where do these need to be added in the code to show up in every frame?   Buffering a .gif  Note that the animation would look better visually if we started with the standard basis plot and lingered for a few seconds before beginning the transformation. We can add that by grabbing frames of the standard basis plot first.    Note that the .gif would also look better if the animation lingered for a few more seconds at the end where the transformation is complete.  Edit the code in so the animation pauses at the completed transformation. Where do you need to add the loop to grab the correct frames?  Animating a gradual transformation of our collection of points from the identity to the matrix transformation can be done similarly. We will include one example using a .gif animating the transformation of a grid of points and leave the slider and animating a grid of lines as an exercise for the reader.   Animated Point Grid Transformation .gif    Animate a gradual matrix transformation using the line grid.     Because linear transformations can be fully determined by a basis, we can visualize the transformation based on how a basis is transformed. We can visualize matrix transformations on vectors in using basis grids (points or lines) and in using basis vectors (and perhaps a point grid).    Summary     TBD      TBD       Visualize a linear transformation using similar methods on a point grid in in Matplotlib.  Animate a linear transformation on a line grid in Matplotlib.  Animate a linear transformation that goes up or down a dimension in Matplotlib. E.g. or all visualized or embedded inside .   "
},
{
  "id": "section-transformations-3",
  "level": "2",
  "url": "section-transformations.html#section-transformations-3",
  "type": "Objectives",
  "number": "2.3",
  "title": "",
  "body": "   Compute a matrix transformation using NumPy.    Visualize a matrix transformation using basis vectors or a grid in Matplotlib.    Animate a visual of a Matrix Transformation.    "
},
{
  "id": "subsec-ComputingMatrixTransformations-4",
  "level": "2",
  "url": "section-transformations.html#subsec-ComputingMatrixTransformations-4",
  "type": "You Try",
  "number": "2.20",
  "title": "",
  "body": "Note the above code throws an error. Use NumPy's transpose() function to make a column vector to fix the error.  You can use transpose(arrayname) , or arrayname.T   "
},
{
  "id": "subsec-ComputingMatrixTransformations-5",
  "level": "2",
  "url": "section-transformations.html#subsec-ComputingMatrixTransformations-5",
  "type": "You Try",
  "number": "2.21",
  "title": "",
  "body": "Recall that NumPy has an alternate command for matrix multiplication. Alter the above code to use the alternate command. "
},
{
  "id": "subsec-ComputingMatrixTransformations-8",
  "level": "2",
  "url": "section-transformations.html#subsec-ComputingMatrixTransformations-8",
  "type": "You Try",
  "number": "2.22",
  "title": "",
  "body": "Change the above code to select a different input vector and compare to the corresponding column of the matrix product. "
},
{
  "id": "e1e2transform",
  "level": "2",
  "url": "section-transformations.html#e1e2transform",
  "type": "Example",
  "number": "2.23",
  "title": "Transformed Basis Vectors.",
  "body": " Transformed Basis Vectors  First we will visualize just the transformed basis vectors.   "
},
{
  "id": "section-transformations-5-5",
  "level": "2",
  "url": "section-transformations.html#section-transformations-5-5",
  "type": "You Try",
  "number": "2.24",
  "title": "",
  "body": "Edit the code in to consolidate the basis vectors into columns of one matrix instead. Then extract their images under from the resulting matrix product. What do you notice? "
},
{
  "id": "pointgrid",
  "level": "2",
  "url": "section-transformations.html#pointgrid",
  "type": "Example",
  "number": "2.25",
  "title": "Transformed Point Grid.",
  "body": " Transformed Point Grid  We will first apply to a grid of coordinate dots. While NumPy's meshgrid() works great for plotting a grid of points, the arrays are not the right size to act as input vectors for the matrix-vector multiplication.  For matrix-vector multiplication we need column vectors, and if we want to compute the image of several vectors all at once we need a matrix where each column is one of our vectors. Here we want each column to be a coordinate, having top entry an x-value and bottom entry a corresponding y-value. In other words, we need a matrix with first row the x-values and second row the corresponding y-values. NumPy has a array.reshape(size) function that allows us to reshape each array of x-values and y-values from meshgrid() into rows. We can then vstack() those two rows to form the desired input matrix.   "
},
{
  "id": "section-transformations-5-8",
  "level": "2",
  "url": "section-transformations.html#section-transformations-5-8",
  "type": "You Try",
  "number": "2.26",
  "title": "",
  "body": "Edit the code in to print every array to see how the same arrays are reshaped, recombined, and transformed.  Print arrays so you can compare X to X1 and Y to Y1. Also compare xygrid to xygrid[i] and xygrid to uvgrid to see the difference.  "
},
{
  "id": "section-transformations-5-9",
  "level": "2",
  "url": "section-transformations.html#section-transformations-5-9",
  "type": "You Try",
  "number": "2.27",
  "title": "",
  "body": "Edit the code in to make a point grid instead. We used a grid at first so you could print the arrays to follow along. Now we want to generalize to more points.  "
},
{
  "id": "section-transformations-5-10",
  "level": "2",
  "url": "section-transformations.html#section-transformations-5-10",
  "type": "You Try",
  "number": "2.28",
  "title": "",
  "body": "Note: the argument c= inside scatter tells Matplotlib how to assign colors to our scatterplot. Here we assign colors according to the first array in xygrid. What happens if you assign colors according to the second array inside xygrid? "
},
{
  "id": "linegrid",
  "level": "2",
  "url": "section-transformations.html#linegrid",
  "type": "Example",
  "number": "2.29",
  "title": "Transformed Line Grid.",
  "body": " Transformed Line Grid  We will build up to the transformed grid a step at a time.  Step 1: First we will learn how to graph a basic grid of lines.   Step 2: Graph a transformed grid of lines.  Now we add in the matrix transformation. Note: in order to find the transformed line grid, we again .reshape() the X,Y grid into a row of x-values and a row of y-values so we can matrix multiply each point as a column of a matrix. We will then .reshape() back into a transformed meshgrid in order to graph our grid of transformed lines.   "
},
{
  "id": "section-transformations-5-13",
  "level": "2",
  "url": "section-transformations.html#section-transformations-5-13",
  "type": "You Try",
  "number": "2.30",
  "title": "",
  "body": "In the first step of , graphing the basic grid of lines, change the number of lines to 3. Now print each array to better see which array is used for each plot. Why do we need the transpose for our vertical lines? "
},
{
  "id": "section-transformations-5-14",
  "level": "2",
  "url": "section-transformations.html#section-transformations-5-14",
  "type": "You Try",
  "number": "2.31",
  "title": "",
  "body": "In the second step of , graphing the transformed grid of lines, change the number of lines to 3. Now print each array to better see which array is used for each plot. What happens if you only increment through the X or the Y and not both? "
},
{
  "id": "section-transformations-5-15",
  "level": "2",
  "url": "section-transformations.html#section-transformations-5-15",
  "type": "Example",
  "number": "2.32",
  "title": "Coloring the Transformed Line Grid.",
  "body": " Coloring the Transformed Line Grid  Unlike scatter which has an argument c=array that allows us to color code based on an x-coordinate or y-coordinate, plot does not. To better see the effects of a reflection, we will use a sequential color map to color our lines.  Step 1: Color a basic grid   Step 2: Color a transformed grid using corresponding coloring.  Below is the corresponding transformed grid with a sequential color map.   "
},
{
  "id": "basisslider",
  "level": "2",
  "url": "section-transformations.html#basisslider",
  "type": "Example",
  "number": "2.33",
  "title": "Transformed Basis Vectors with Interactive Slider.",
  "body": " Transformed Basis Vectors with Interactive Slider  First we create a slider that starts with the identity transformation on two basis vectors and gradually gives us the transformation by    Note that in this interactive, we only want the current frame, and not all the frames up to the current frame. Do you know why?  "
},
{
  "id": "basisgif",
  "level": "2",
  "url": "section-transformations.html#basisgif",
  "type": "Example",
  "number": "2.34",
  "title": "Transformed Basis Vectors with PillowWriter .gif.",
  "body": " Transformed Basis Vectors with PillowWriter .gif   "
},
{
  "id": "section-transformations-6-7",
  "level": "2",
  "url": "section-transformations.html#section-transformations-6-7",
  "type": "You Try",
  "number": "2.35",
  "title": "",
  "body": "Comment out plt.cla() in . What happens to your animation? "
},
{
  "id": "section-transformations-6-8",
  "level": "2",
  "url": "section-transformations.html#section-transformations-6-8",
  "type": "You Try",
  "number": "2.36",
  "title": "",
  "body": "Add a title, grid, and legend to the animation in . Where do these need to be added in the code to show up in every frame? "
},
{
  "id": "basisgiflinger",
  "level": "2",
  "url": "section-transformations.html#basisgiflinger",
  "type": "Example",
  "number": "2.37",
  "title": "Buffering a .gif.",
  "body": " Buffering a .gif  Note that the animation would look better visually if we started with the standard basis plot and lingered for a few seconds before beginning the transformation. We can add that by grabbing frames of the standard basis plot first.   "
},
{
  "id": "section-transformations-6-11",
  "level": "2",
  "url": "section-transformations.html#section-transformations-6-11",
  "type": "You Try",
  "number": "2.38",
  "title": "",
  "body": "Edit the code in so the animation pauses at the completed transformation. Where do you need to add the loop to grab the correct frames? "
},
{
  "id": "anim-point-grid",
  "level": "2",
  "url": "section-transformations.html#anim-point-grid",
  "type": "Example",
  "number": "2.39",
  "title": "Animated Point Grid Transformation .gif.",
  "body": " Animated Point Grid Transformation .gif   "
},
{
  "id": "section-transformations-6-14",
  "level": "2",
  "url": "section-transformations.html#section-transformations-6-14",
  "type": "You Try",
  "number": "2.40",
  "title": "",
  "body": "Animate a gradual matrix transformation using the line grid. "
},
{
  "id": "exercises-transformations-1",
  "level": "2",
  "url": "section-transformations.html#exercises-transformations-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "Visualize a linear transformation using similar methods on a point grid in in Matplotlib. "
},
{
  "id": "exercises-transformations-2",
  "level": "2",
  "url": "section-transformations.html#exercises-transformations-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "Animate a linear transformation on a line grid in Matplotlib. "
},
{
  "id": "exercises-transformations-3",
  "level": "2",
  "url": "section-transformations.html#exercises-transformations-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "Animate a linear transformation that goes up or down a dimension in Matplotlib. E.g. or all visualized or embedded inside . "
},
{
  "id": "section-determinants",
  "level": "1",
  "url": "section-determinants.html",
  "type": "Section",
  "number": "2.4",
  "title": "Determinants",
  "body": " Determinants  In this section we will learn how to     Compute the determinant in NumPy and SymPy.    Solve invertible square matrices numerically in NumPy.    Use the determinant to see if a matrix might be ill-conditioned.      What is the determinant?  Recall that the action of a linear transformation from can be completely determined by a set of basis vectors. These basis vectors create a coordinate grid. For example, in any set of two non-parallel vectors form a basis and a corresponding coordinate grid of parallelograms. The coordinate grid determines a basic area, the area of the parallelogram between the two basis vectors. Since the transformation is linear, the transformed basis vectors either create a transformed parallelogram, or they collapse to a line or the origin. In particular, the areas of the parallelograms are scaled by the transformation and, since we started with a basis, all areas in the plane are scaled by that same amount. How the area is scaled by a transformation on is the value of the determinant.  In the coordinate grid determines a basic volume. Here how the volume is scaled by a transformation on is the value of the determinant. Finally in the coordinate grid determines a basic hypervolume and the value by which the volume is scaled by a transformation on is the value of the determinant.  The determinant can be positive or negative depending on whether or not the orientation of the basis vectors changes or not. For example, a reflection in will switch the orientation and change the sign of the determinant.    Computing the Determinant  We can compute the determinant of square matrices both in NumPy and in SymPy as follows.   Find the determinants of the matrices in the code above. What can you conclude about the transformations of ?  Find a matrix with determinant 0. Check your determinant in the above code. What can you conclude about the transformation?  Play with finding the determinant of higher dimensional matrices. What can you conclude about the transformations?    Determinants and Systems of Linear Equations  The determinant gives us a quick way to tell whether or not a system of linear equations has a unique solution or not. Recall that every system of linear equations corresponds to a matrix-vector equation.   For example, the systems correspond to matrix equations and    If the corresponding matrix transformation collapses down a dimension, more than one vector gets mapped to the same place, preventing an inverse transformation (since one output would have to map back to several inputs). In this case, the determinant of the transformation is 0. This corresponds exactly to linear systems of equations with either infinitely many solutions or no solution.  When the determinant is non-zero, however, the matrix transformation is invertible. This corresponds exactly to when a system of linear equations has a unique solution, since you can solve for it using   Consider the linear systems in .   Compute the determinant.    What can you conclude about solutions to each system?       Numerically Solving System of Equations  In , we learned how to solve systems of linear equations using rref() in SymPy. More efficient algorithms e.g. using -decomposition of our matrix can be implemented when we know we have a unique solution. NumPy's linalg.solve(A,b) and SymPy's A.solve(b) uses such algorithms to solve .  Use NumPy's linalg.solve(A,b) to solve the systems of linear equations in . Next try SymPy's A.solve(b) . What happens? Why?  In practice, we often check the determinant to determine whether or not an algorithm such as linalg.solve() will work before solving the system numerically. Many stackoverflow questions have been written asking about the singular error when attempting to solve a large system numerically. The response always involves someone in the know checking the determinant.     Ill-conditioned Matrices  Recall in we explored solutions to a system of equations where the corresponding matrix was ill-conditioned. How does ill-conditioning relate to the determinant and the matrix transformation?  Compute the determinant of the matrix in . Hypothesize a property of ill-conditioned matrices and explain how this property is related to the rounding issues we experienced.  If we visualize the linear system of equations as a matrix transformation of we can graphically see the problem.  Using what we learned in , plot the matrix transformation corresponding to on a point grid. Use your visual to clearly show what is happening with the solutions in . Note: Solving a matrix equation corresponds to then reversing the transformation.         Summary     TBD      TBD       Compute the determinant of the matrix in . Hypothesize a property of ill-conditioned matrices and explain how this property is related to the rounding issues we experienced.  Using what we learned in , plot the matrix transformation corresponding to on a point grid. Use your visual to clearly show what is happening with the solutions in . Note: animating can make this even clearer.    "
},
{
  "id": "section-determinants-3",
  "level": "2",
  "url": "section-determinants.html#section-determinants-3",
  "type": "Objectives",
  "number": "2.4",
  "title": "",
  "body": "   Compute the determinant in NumPy and SymPy.    Solve invertible square matrices numerically in NumPy.    Use the determinant to see if a matrix might be ill-conditioned.    "
},
{
  "id": "subsec-computing-determinant-4",
  "level": "2",
  "url": "section-determinants.html#subsec-computing-determinant-4",
  "type": "You Try",
  "number": "2.41",
  "title": "",
  "body": "Find the determinants of the matrices in the code above. What can you conclude about the transformations of ? "
},
{
  "id": "subsec-computing-determinant-5",
  "level": "2",
  "url": "section-determinants.html#subsec-computing-determinant-5",
  "type": "You Try",
  "number": "2.42",
  "title": "",
  "body": "Find a matrix with determinant 0. Check your determinant in the above code. What can you conclude about the transformation? "
},
{
  "id": "subsec-computing-determinant-6",
  "level": "2",
  "url": "section-determinants.html#subsec-computing-determinant-6",
  "type": "You Try",
  "number": "2.43",
  "title": "",
  "body": "Play with finding the determinant of higher dimensional matrices. What can you conclude about the transformations? "
},
{
  "id": "determinant-and-systems",
  "level": "2",
  "url": "section-determinants.html#determinant-and-systems",
  "type": "Example",
  "number": "2.44",
  "title": "",
  "body": " For example, the systems correspond to matrix equations and   "
},
{
  "id": "subsec-determinants-linear-systems-6",
  "level": "2",
  "url": "section-determinants.html#subsec-determinants-linear-systems-6",
  "type": "You Try",
  "number": "2.45",
  "title": "",
  "body": "Consider the linear systems in .   Compute the determinant.    What can you conclude about solutions to each system?    "
},
{
  "id": "subsec-numerical-solve-3",
  "level": "2",
  "url": "section-determinants.html#subsec-numerical-solve-3",
  "type": "You Try",
  "number": "2.46",
  "title": "",
  "body": "Use NumPy's linalg.solve(A,b) to solve the systems of linear equations in . Next try SymPy's A.solve(b) . What happens? Why? "
},
{
  "id": "subsec-Ill-conditionedTransformations-3",
  "level": "2",
  "url": "section-determinants.html#subsec-Ill-conditionedTransformations-3",
  "type": "You Try",
  "number": "2.47",
  "title": "",
  "body": "Compute the determinant of the matrix in . Hypothesize a property of ill-conditioned matrices and explain how this property is related to the rounding issues we experienced. "
},
{
  "id": "subsec-Ill-conditionedTransformations-5",
  "level": "2",
  "url": "section-determinants.html#subsec-Ill-conditionedTransformations-5",
  "type": "You Try",
  "number": "2.48",
  "title": "",
  "body": "Using what we learned in , plot the matrix transformation corresponding to on a point grid. Use your visual to clearly show what is happening with the solutions in . Note: Solving a matrix equation corresponds to then reversing the transformation.  "
},
{
  "id": "exercises-determinants-1",
  "level": "2",
  "url": "section-determinants.html#exercises-determinants-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "Compute the determinant of the matrix in . Hypothesize a property of ill-conditioned matrices and explain how this property is related to the rounding issues we experienced. "
},
{
  "id": "exercises-determinants-2",
  "level": "2",
  "url": "section-determinants.html#exercises-determinants-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "Using what we learned in , plot the matrix transformation corresponding to on a point grid. Use your visual to clearly show what is happening with the solutions in . Note: animating can make this even clearer.  "
},
{
  "id": "section-eigenthings",
  "level": "1",
  "url": "section-eigenthings.html",
  "type": "Section",
  "number": "2.5",
  "title": "Eigenthings",
  "body": " Eigenthings  In this section we will learn how to     Compute eigenvalues and eigenvectors using NumPy and SymPy.    Visualize a matrix transformation using an eigenbasis (if possible).    Diagonalize a matrix (if possible).      Computing Eigenthings  Although we could use determinants to solve for eigenvalues and row reducing to solve for eigenvectors, both NumPy and SymPy have commands to directly determine eigenthings.  NumPy's linalg.eig(matrix_name) can be used to find numerical approximations for the eigenvalues and eigenvectors (where the latter are normalized to have magnitude 1). Note that linalg.eig(matrix_name) returns a tuple of both the eigenvalues and the eigenvectors.  You can also find just the characteristic polynomial using poly(matrix_name) and just the eigenvalues using linalg.eigvals(matrix_name) .   Use the above code to write down the characteristic polynomials for matrix . Note that you have to interpret the output correctly.  Use the above NumPy code to write down the eigenvalues and eigenvectors for matrix .  Repeat both of the above exercises for the matrix . Why might someone prefer to solve a eigenvalue question by hand instead?  As before, SymPy works well with symbolic manipulation. You can find the characteristic polynomial via matrix.charpoly() . SymPy's .eigenvects() also returns a tuple of exact eigenvalues, their multiplicities, and exact eigenvectors. Since computing eigenvectors can be costly, we have the option of just computing eigenvalues using .eigenvals() instead. If instead of exact values you want a decimal approximation you can use the command .evalf() or N() .   Use the above SymPy code to write down the characteristic polynomial for matrix . Note that you have to interpret the output correctly.  Use the above code to write down the eigenvalues and eigenvectors for matrix .  Repeat the above two exercises for matrix .    Visualizing with Eigenthings  Recall from since a matrix transformation is linear, we can visualize using a standard basis grid and the transformed basis grid. Every other point in space is a linear combination. We can visualize with either a standard basis coordinate point grid and its image or a standard basis coordinate line grid and its image under the transformation.   Visualizing using the Standard Basis grid  Consider the matrix transformation given by   We can visualize the matrix transformation using the standard basis. Here and   First we will visualize the transformation using the standard basis vectors and a resulting coordinate point grid and their transformations.   We could also visualize the transformation using a coordinate line grid from the standard basis and the resulting transformed line grid.    Eigenvalues and eigenvectors give us additional information about a matrix transformation, however. And we can use that information to better understand the transformation of our space. In particular, if the eigenvectors of our transformation form a basis for the domain of our transformation, we can use the eigenbasis instead of the standard basis.   Visualizing using an Eigen-basis grid  Consider the matrix transformation from given by    has eigenvalues of and with corresponding eigenspaces and (See below.)   Since we have two linearly independent eigenvectors, forms an alternate basis of eigenvectors for . Now consider what the transformation does to this eigenbasis for .  Since these are eigenvectors with eigenvalues and respectively, we know the first eigenvector is scaled by 4, while the second eigenvector remains the same (scaled by 1). Any grid of linear combinations of these eigen-basis vectors will scale similarly.  But how can we create a grid based on these eigenvectors?  Simple. We can take a standard basis grid and use a matrix transformation that sends to one eigenvector and to our linearly independent eigenvector.  The matrix transformation that takes to and to is given by   Below is a coordinate grid of points generated by the eigenbasis vectors.   Now we can apply our matrix transformation to this alternate eigenbasis point grid.   We can also animate this transformation with a small adjustment to .   Edit to plot and animate the eigenbasis grid under the transformation by in the above example.  Thus we can use an eigenbasis for an alternative visualization of a transformation. Note that the process of converting from the standard basis to an eigenbasis using a matrix transformation is more than just a hand up in visualizing these matrix transformations, however. A similar approach allows us to relate any matrix transformation with a basis of eigenvectors to a simple scaling matrix, which are diagonal matrices and very easy to work with.    Diagonalization   Diagonalizing A  Consider the matrix transformation given by As we saw in , has an eigen-basis for . Moreover, we found a transformation from the standard basis to those eigenvectors is given by Since the eigenvectors are merely scaled by we can relate to a scaling (dilation) matrix coming from the eigenvalues corresponding to the eigenvectors in , namely, But the scaling matrix scales the standard basis vectors by 4 and 1. If we want to instead scale our eigenvectors we can   Transform our eigenbasis vectors to standard basis vectors using .    Scale the target standard basis vectors by the corresponding eigenvalues using .    Transform back to the eigenbasis grid of using .     Since we mapped the eigenvector with eigenvalue of 4 to and the eigenvector with eigenvalue of 1 to , we want to scale by the eigenvalue of 4 and by the eigenvalue of 1. If instead we had swapped those, we would need to swap in both and .   In other words, the matrix transformation .   Confirm that by computing the matrix product in NumPy or SymPy in the code below.   Note the above example worked because we could find a real eigen-basis for the domain of our transformation. If instead, we can not find a real eigenbasis for the domain we say that the matrix is NOT diagonalizable.     Complex Eigen-thing Decomposition  If we have complex eigenvalues, we necessarily have complex eigenvectors. While our matrix is not diagonalizable, we can still decompose into nicer transformations. The Rotation Scaling Theorem provides a way to decompose where is a rotation scaling matrix.    Let be a real matrix with a complex eigenvalue and let be a corresponding eigenvector. Then where and and See Rotation Scaling Theorem in Section 5.5 of Interactive Linear Algebra.           Summary     TBD      TBD         "
},
{
  "id": "section-eigenthings-3",
  "level": "2",
  "url": "section-eigenthings.html#section-eigenthings-3",
  "type": "Objectives",
  "number": "2.5",
  "title": "",
  "body": "   Compute eigenvalues and eigenvectors using NumPy and SymPy.    Visualize a matrix transformation using an eigenbasis (if possible).    Diagonalize a matrix (if possible).    "
},
{
  "id": "subsec-computing-eigenthings-6",
  "level": "2",
  "url": "section-eigenthings.html#subsec-computing-eigenthings-6",
  "type": "You Try",
  "number": "2.49",
  "title": "",
  "body": "Use the above code to write down the characteristic polynomials for matrix . Note that you have to interpret the output correctly. "
},
{
  "id": "subsec-computing-eigenthings-7",
  "level": "2",
  "url": "section-eigenthings.html#subsec-computing-eigenthings-7",
  "type": "You Try",
  "number": "2.50",
  "title": "",
  "body": "Use the above NumPy code to write down the eigenvalues and eigenvectors for matrix . "
},
{
  "id": "subsec-computing-eigenthings-8",
  "level": "2",
  "url": "section-eigenthings.html#subsec-computing-eigenthings-8",
  "type": "You Try",
  "number": "2.51",
  "title": "",
  "body": "Repeat both of the above exercises for the matrix . Why might someone prefer to solve a eigenvalue question by hand instead? "
},
{
  "id": "subsec-computing-eigenthings-11",
  "level": "2",
  "url": "section-eigenthings.html#subsec-computing-eigenthings-11",
  "type": "You Try",
  "number": "2.52",
  "title": "",
  "body": "Use the above SymPy code to write down the characteristic polynomial for matrix . Note that you have to interpret the output correctly. "
},
{
  "id": "subsec-computing-eigenthings-12",
  "level": "2",
  "url": "section-eigenthings.html#subsec-computing-eigenthings-12",
  "type": "You Try",
  "number": "2.53",
  "title": "",
  "body": "Use the above code to write down the eigenvalues and eigenvectors for matrix . "
},
{
  "id": "subsec-computing-eigenthings-13",
  "level": "2",
  "url": "section-eigenthings.html#subsec-computing-eigenthings-13",
  "type": "You Try",
  "number": "2.54",
  "title": "",
  "body": "Repeat the above two exercises for matrix . "
},
{
  "id": "standardtransformation",
  "level": "2",
  "url": "section-eigenthings.html#standardtransformation",
  "type": "Example",
  "number": "2.55",
  "title": "Visualizing using the Standard Basis grid.",
  "body": " Visualizing using the Standard Basis grid  Consider the matrix transformation given by   We can visualize the matrix transformation using the standard basis. Here and   First we will visualize the transformation using the standard basis vectors and a resulting coordinate point grid and their transformations.   We could also visualize the transformation using a coordinate line grid from the standard basis and the resulting transformed line grid.   "
},
{
  "id": "eigentransformation",
  "level": "2",
  "url": "section-eigenthings.html#eigentransformation",
  "type": "Example",
  "number": "2.56",
  "title": "Visualizing using an Eigen-basis grid.",
  "body": " Visualizing using an Eigen-basis grid  Consider the matrix transformation from given by    has eigenvalues of and with corresponding eigenspaces and (See below.)   Since we have two linearly independent eigenvectors, forms an alternate basis of eigenvectors for . Now consider what the transformation does to this eigenbasis for .  Since these are eigenvectors with eigenvalues and respectively, we know the first eigenvector is scaled by 4, while the second eigenvector remains the same (scaled by 1). Any grid of linear combinations of these eigen-basis vectors will scale similarly.  But how can we create a grid based on these eigenvectors?  Simple. We can take a standard basis grid and use a matrix transformation that sends to one eigenvector and to our linearly independent eigenvector.  The matrix transformation that takes to and to is given by   Below is a coordinate grid of points generated by the eigenbasis vectors.   Now we can apply our matrix transformation to this alternate eigenbasis point grid.   We can also animate this transformation with a small adjustment to .  "
},
{
  "id": "subsec-visualizing-eigenthings-6",
  "level": "2",
  "url": "section-eigenthings.html#subsec-visualizing-eigenthings-6",
  "type": "You Try",
  "number": "2.57",
  "title": "",
  "body": "Edit to plot and animate the eigenbasis grid under the transformation by in the above example. "
},
{
  "id": "subsec-Diagonalization-2",
  "level": "2",
  "url": "section-eigenthings.html#subsec-Diagonalization-2",
  "type": "Example",
  "number": "2.58",
  "title": "Diagonalizing A.",
  "body": " Diagonalizing A  Consider the matrix transformation given by As we saw in , has an eigen-basis for . Moreover, we found a transformation from the standard basis to those eigenvectors is given by Since the eigenvectors are merely scaled by we can relate to a scaling (dilation) matrix coming from the eigenvalues corresponding to the eigenvectors in , namely, But the scaling matrix scales the standard basis vectors by 4 and 1. If we want to instead scale our eigenvectors we can   Transform our eigenbasis vectors to standard basis vectors using .    Scale the target standard basis vectors by the corresponding eigenvalues using .    Transform back to the eigenbasis grid of using .     Since we mapped the eigenvector with eigenvalue of 4 to and the eigenvector with eigenvalue of 1 to , we want to scale by the eigenvalue of 4 and by the eigenvalue of 1. If instead we had swapped those, we would need to swap in both and .   In other words, the matrix transformation .  "
},
{
  "id": "subsec-Diagonalization-3",
  "level": "2",
  "url": "section-eigenthings.html#subsec-Diagonalization-3",
  "type": "You Try",
  "number": "2.59",
  "title": "",
  "body": "Confirm that by computing the matrix product in NumPy or SymPy in the code below. "
},
{
  "id": "thm-rotationscaling",
  "level": "2",
  "url": "section-eigenthings.html#thm-rotationscaling",
  "type": "Theorem",
  "number": "2.60",
  "title": "",
  "body": "  Let be a real matrix with a complex eigenvalue and let be a corresponding eigenvector. Then where and and See Rotation Scaling Theorem in Section 5.5 of Interactive Linear Algebra.    "
},
{
  "id": "exercises-eigenthings-1",
  "level": "2",
  "url": "section-eigenthings.html#exercises-eigenthings-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": ""
},
{
  "id": "examples",
  "level": "1",
  "url": "examples.html",
  "type": "Section",
  "number": "3.1",
  "title": "Samples of various pretext formats",
  "body": " Samples of various pretext formats   Does this make a difference?   Does this make a difference?       C    D      Here is a paragraph. With quotations and single quotes , emphasis and angles .  Here are examples of the OscarLevin css style.     Here is a part of an ordered list    next part      try again       Here is an itemized list      Here is an itemized list          integral   An integral is a sum.     integral   An integral is a sum.     integral   An integral is a sum.     integral  An integral is a sum.    integral  An integral is a sum.   integral An integral is a sum. A variable is a container for information.   How to do an aside  here is an aside. can you footnote an aside?   with two paragraphs and    It seems that asides get lost a little on the right, so I think I should use them sparingly. How in the heck do you write a paragraph that is readable?  Exercise What  Does this work at all?    What happens if I do this? Blah blah blah     C    D      blah blah   "
},
{
  "id": "examples-2-2",
  "level": "2",
  "url": "examples.html#examples-2-2",
  "type": "Investigation",
  "number": "3.1",
  "title": "",
  "body": " Does this make a difference?  "
},
{
  "id": "examples-3",
  "level": "2",
  "url": "examples.html#examples-3",
  "type": "Objectives",
  "number": "3.1",
  "title": "",
  "body": "   C    D    "
},
{
  "id": "examples-7",
  "level": "2",
  "url": "examples.html#examples-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integral integral integral integral integral integral variable "
},
{
  "id": "examples-10",
  "level": "2",
  "url": "examples.html#examples-10",
  "type": "You Try",
  "number": "3.4",
  "title": "Exercise What.",
  "body": "Exercise What  Does this work at all?  "
},
{
  "id": "examples-12",
  "level": "2",
  "url": "examples.html#examples-12",
  "type": "Outcomes",
  "number": "3.1",
  "title": "",
  "body": "   C    D    "
},
{
  "id": "examples-13-1",
  "level": "2",
  "url": "examples.html#examples-13-1",
  "type": "Reading Question",
  "number": "1",
  "title": "",
  "body": "blah blah "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
