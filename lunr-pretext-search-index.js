var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   linnbenton.edu   https:\/\/www.linnbenton.edu\/   copyright  "
},
{
  "id": "prologue",
  "level": "1",
  "url": "prologue.html",
  "type": "Chapter",
  "number": "0",
  "title": "Prologue",
  "body": " Prologue  This textbook is a work in progress, and is being written specifically for Mechanical Engineering majors at OSU to introduce just enough Python code to implement Matrix Algebra taught in MTH 264. You are currently reading an unfinished first draft. We expect some of our students to know more than we do, and hope, with their permission, to include their ideas and contributions to the textbook.  We hope to have a draft of each chapter that we will use to guide each class discussion. Note that instead of needing to install any software on your device we will use embedded SageMathCell. You will need a laptop (or tablet with a keyboard) for each class day, however. Laptops are available for checkout in the LBCC library.   "
},
{
  "id": "section-variables",
  "level": "1",
  "url": "section-variables.html",
  "type": "Section",
  "number": "1.1",
  "title": "Variables",
  "body": " Variables  In this section we will learn how to assign values to a variable in Python and display results.     Create a variable and assign it a value in Python using =     Display the value of a variable in Python using print()       A variable is like a container that can be used to store information or data. In Python you assign a value to a variable using = .  Run the Python code below by clicking the Evaluate (Python) button.   Note that the function print() was needed to display the value of the variable.  Change the value of the variable a by adding 5 after the 2*3 above and run the code again to see how the output changes.    Naming Variables  Variables can be named using letters, underscores, numbers, etc. Just be sure to use the exact same name to call your variable.  For example, the following code has a syntax error. Run the code as is and see what happens.    Can you fix the bug in the above code so it runs correctly?   Variables are case sensitive and must be exactly the same for Python to recognize them.     Arithmetic and Comments in Python  Python recognizes simple arithmetic symbols like + -, *, \/ .  Meanwhile a hashtag # can be used to tell Python to ignore code, reading what follows as a comment by the author rather than a Python command.   Comments can help anyone reading your code understand what that section of the code is doing. You can also comment out portions of code to isolate a bug.   In the box below, change the value of the variable arithmetic to try out some basic calculations. Add a comment using # to explain what your code is doing.   You can use the standard order of operations and parentheses (PEMDAS).      More about Variables  Just like in math, variables can be helpful when the information will change. Recall the formula for the area of a circle .  In the code below,    fill in the formula for the area of the circle using the appropriate variable names and arithmetic operations.      Use the code to approximately compute the area of a circle with radius 5 and a circle with radius 13.     Note that print will display comma separted items one right after the other. In the code above we first displayed the string The area of a circle is followed by the current value of our variable circle_area .    Syntax and Semantic errors  One error we can make when creating and editing code is to mis-type a command causing Python to not understand the syntax , that is the chosen command, in our program. Another error is when we make our meaning unclear, more of a semantic issue. For example you can add numbers to numbers or strings of letters to strings of letters in Python but if we try to add a number to a string of letters, Python will not know what is meant by adding.    Summary     A variable can be used as a container to store data or information.      Use print(variable_name) to display the information stored in the variable.      Use # to comment and make your code more readable.       Try some Python here.   "
},
{
  "id": "objectives-1",
  "level": "2",
  "url": "section-variables.html#objectives-1",
  "type": "Objectives",
  "number": "1.1",
  "title": "",
  "body": "   Create a variable and assign it a value in Python using =     Display the value of a variable in Python using print()     "
},
{
  "id": "p-9",
  "level": "2",
  "url": "section-variables.html#p-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "variable "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "section-variables.html#exercise-1",
  "type": "You Try",
  "number": "1.1",
  "title": "",
  "body": "Change the value of the variable a by adding 5 after the 2*3 above and run the code again to see how the output changes. "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "section-variables.html#exercise-2",
  "type": "You Try",
  "number": "1.2",
  "title": "",
  "body": " Can you fix the bug in the above code so it runs correctly?   Variables are case sensitive and must be exactly the same for Python to recognize them.  "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "section-variables.html#exercise-3",
  "type": "You Try",
  "number": "1.3",
  "title": "",
  "body": " In the box below, change the value of the variable arithmetic to try out some basic calculations. Add a comment using # to explain what your code is doing.   You can use the standard order of operations and parentheses (PEMDAS).  "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "section-variables.html#exercise-4",
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
  "body": " Python Packages and NumPy  Python packages and libraries are collections of functions and modules centered around a common theme. In this section we will learn how to import a Python package and use functions from that package.     Import a Python package or library (our example NumPy).    Use functions from a Python package.      Importing the package NumPy  NumPy is an open source scientific computing package that allows you to use standard mathematical functions and constants like sine or pi. NumPy also allows you to work with arrays of numbers so you can efficiently perform computations.   Note to call a function from an imported package you must use the syntax package.function . To avoid retyping the long name of a package every time, it is standard practice to rename the package as you import.  Rename the package numpy in the above code by replacing the import line with import numpy as np . Next use the new name of the package to call the function np.sin() and re-run.    Standard functions in NumPy  In addition to the standard trigonometric functions, NumPy also contains as exp() and natural log as log() , as well as the standard mathematical constants like pi and e .  Use the NumPy package to compute the area of a circle using pi. If you import numpy as np, you will use np.pi     NumPy arrays  NumPy arrays can help us efficiently do computations with a collection of numbers all at once. We can also represent vectors or matrices using NumPy arrays. Run the code below that calls the NumPy function array to see how it works.   NumPy also has built in functions to automatically create an array with certain conditions. For example linspace() takes a given interval and sets up an array of evenly spaced numbers on that interval.   Note that the array includes 5, so it takes 11 evenly spaced numbers to get numbers 0.5 apart. Note also that although the number values are evenly spaced, the printed array is not. Namely the default is to space out the entries by the maximum number of decimal places with blank spaces instead of extra zeroes.  Edit the above code to use linspace to create an array of numbers between 0 and 5 that are one-quarter apart. When you evaluate your code should print the list 0, 0.25, 0.5, 0.75, etc.  Another way to create an array of values for a given interval is arange() , which uses a step value to set up a sequence of numbers within that interval.   Note that the array gets cut off before the right endpoint of the interval if your stepsize doesn't divide the interval evenly.  Edit the above code to use arange to create an array of numbers between 0 and 5 that are one-quarter apart. When you evaluate your code should print the list 0, 0.25, 0.5, 0.75, etc.    You can find more information about the package NumPy at . Python's wiki has a list of other commonly used modules and packages .    Summary     You can import a Python package and rename it by using import package as name .    You can call a function from a package using packagename.function     Numpy arrays can help us efficiently do computations.    The Numpy functions linspace() and arange() set up an array of values over an interval.       Research NumPy   Look up how to efficiently create a 15 element array of all 's.    Use this to create a 15 element array of all 's.       There is more than one way to do this. One approach is to use the numpy function ones().     Once you have an array of all 1's, you can multiply it by any number you want.      The magnitude of an earthquake is measured using the Richter Scale, which is a logarithmic scale. The amount of energy in ergs an earthquake releases can be determined from the magnitude using the formula The USGS website lets you download magnitude data for the 30 most recent earthquakes in the world with magnitude . Use Numpy to determine how much energy has been released in the 30 most recent earthquakes. Note that you can copy and paste data from a csv file into SageMathCell. You will just need to then format that data for Numpy.    "
},
{
  "id": "objectives-2",
  "level": "2",
  "url": "section-modules.html#objectives-2",
  "type": "Objectives",
  "number": "1.2",
  "title": "",
  "body": "   Import a Python package or library (our example NumPy).    Use functions from a Python package.    "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "section-modules.html#exercise-5",
  "type": "You Try",
  "number": "1.4",
  "title": "",
  "body": "Rename the package numpy in the above code by replacing the import line with import numpy as np . Next use the new name of the package to call the function np.sin() and re-run. "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "section-modules.html#exercise-6",
  "type": "You Try",
  "number": "1.5",
  "title": "",
  "body": "Use the NumPy package to compute the area of a circle using pi. If you import numpy as np, you will use np.pi "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "section-modules.html#exercise-7",
  "type": "You Try",
  "number": "1.6",
  "title": "",
  "body": "Edit the above code to use linspace to create an array of numbers between 0 and 5 that are one-quarter apart. When you evaluate your code should print the list 0, 0.25, 0.5, 0.75, etc. "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "section-modules.html#exercise-8",
  "type": "You Try",
  "number": "1.7",
  "title": "",
  "body": "Edit the above code to use arange to create an array of numbers between 0 and 5 that are one-quarter apart. When you evaluate your code should print the list 0, 0.25, 0.5, 0.75, etc. "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "section-modules.html#exercise-9",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "Research NumPy   Look up how to efficiently create a 15 element array of all 's.    Use this to create a 15 element array of all 's.       There is more than one way to do this. One approach is to use the numpy function ones().     Once you have an array of all 1's, you can multiply it by any number you want.     "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "section-modules.html#exercise-10",
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
  "body": " Matplotlib and 2D graphing  Matplotlib is a Python library that uses NumPy arrays ( ) to create static or interactive graphs and data visualizations. In this section we will learn how to use the MatPlotLib to graph curves and plot points in 2D.     Use Matplotlib to graph curves.    Use Matplotlib to make a scatterplot.    Use Matplotlib to graph vectors.    Label the axes on a graph and customize features.    Create multiple subplots.      Creating a graph or plot  A Matplotlib API (Application Programming Interface) called pyplot is used to create the figure and individual graphs. The figure acts as a container and can contain multiple subplots, each an axes object.   You can also create a figure and a plot with just one line of code using a comma to separate the two and the function plt.subplots() that creates both at once.     Curves in 2D  Matplotlib graphs curves by plotting points and connecting the dots. The inputs and outputs are given by NumPy arrays and then plotted on the axes.            Read through both sets of code below that uses matplotlib to graph a line and a sine curve to see the syntax for these steps. Do you see the difference in how the numpy arrays were created for the inputs and outputs? Run both sets of code to see the result.    Note when `connecting the dots' you need enough points to get a smooth curve.  Change both of the above sets of code to whole number inputs from 0 to 6.   What happens to your line?    What happens to your sine curve?     Change the above code to use arange() instead of linspace() to set up your inputs. What is the smallest step size that makes the curve look smooth?  Change the above code to graph with a traditional input window like [-10,10].  You can plot more than one curve on the same axes using the same inputs but more than one set of outputs. Run the code below to graph and on the same graph.   Notice that if you don't specify the inputs, pyplot uses a default set instead. Change the above code and remove the second call for the inputs X in graph.plot(). What is the default input window pyplot uses for Y2?  Change the above code to add a third function on the same graph.    Scatter Plots in 2D  To graph a scatterplot, use the command scatter instead of plot .  Adjust the code in any plot above to make it into a scatter plot instead.  Replace ax.plot() with ax.scatter() in the code.   For scatter plots sometimes you get the data from an experiment instead of a formula. As long as the outputs are given as a NumPy array, either from manipulating your input array, or by creating a completely new output array, Matplotlib will still connect the dots.     Parametric Curves in 2D  In mathematics and the sciences we sometimes introduce a new parameter and write coordinates and in terms of that parameter. This is common for curves that are not functions of , like circles or ellipses, or a nice way to model motion, where the and coordinate location of an object is the output at each input time . If you haven't seen this in a Trigonometry class, or if you need a refresher, check out insert appendix stuff here . In mathematics these parametric curves or space curves are often written as a set of two parametric equations or a vector-valued function.  For example, we can graph a circle using or, equivalently, for values of in   Matplotlib still graphs these curves by plotting points using plot and connecting the dots, which will make it easy to generalize these curves to 3D.   Note that the above code graphs the unit circle. Play with the above functions for and to see what other interesting curves you can graph. In particular, when you have the parameter , can you create  a line?  a different circle?  a parabola?      Titles and Axes Labels  You can easily add titles and label each axis using the commands set_title(\"title_here\") , set_xlabel(\"label_here\") , set_ylabel(\"label_here\") . Since the code below is longer, you might need to scroll to see all of the commands.    You can also adjust the tick marks on the axes, but it takes a little more work, and there are multiple approaches.  Search online for a way to change the tick labels in Matplotlib. Try and adjust the \"Falling Body\" graph to have tickmarks every quarter of a second.    Customizing  You can customize pretty much everything in each plot: colors, markers, line width and styles, etc. Below are a few examples.    The comma separated list of possible commands inside the parentheses of a function like plot() are called the arguments of the function. The functions plot and scatter can take arguments like color=\"color_here\" , linestyle=\"style_here\" , linewidth=number_here , marker=\"markertype_here\" .    Vectors in 2D  Matplotlib plots vectors using a function from pyplot called quiver , which takes an initial coordinate, followed by the vector coordinates, to draw an arrow. Since the axes of your graph are not determined by the input domain of a function, you need to explicitly choose your axes limits using xlim and ylim .   Try various viewing windows in the above code. What do you notice about the size of your arrow?  Since quiver is typically used for vector fields, the size scales automatically based on other elements of the graph. Here we want to use the -axes as a fixed scale to draw the vectors, and so will include the arguments angles='xy', scale_units='xy', scale=1 inside quiver .   Try various vectors and viewing windows in the above code.  For multiple vectors it can be helpful to color code and use pyplot's grid() and legend() feature.   Try various vectors and viewing windows in the above code. Also add a horizontal and vertical axis at and using the code found in the second Customizing example.    Multiple plots in the same figure  Sometimes we want more than one graph in the same figure. Multiple graphs can be added to the same figure using plt.subplots() , which sets up the number of rows or columns of desired plots. Note the axes() function creates each separate graph and their individual axes.       There are other ways to set up your figure and your axes in Matplotlib. Some are shortcuts and Matplotlib will use default settings (e.g. if we do not explicitly give inputs for the function we want to graph). The approach in this section is very explicit and object oriented, which makes it easier to see how to control each feature as we get started.    Summary     Every graph needs a figure object and an axes object (which is essentially a single plot). The graph object will plot just the axes if no other information is given.    We graph a connected curve on our axes using axes_name.plot(array x,array y) for both standard equations and parametric curves.    We graph a scatterplot on our axes using axes_name.scatter(array x, array y) .    We graph a parametric curve on our axes using axes_name.plot(array x, array y) .    We can use numpy.linspace() to efficiently create enough points for plot() to connect the dots into a smooth-looking curve.    We can add titles and labels using axes_name.set_title(\"Title\") or axes_name.set_xlabel(\"input_label\") .    We can customize color, linestyles, plotting styles, thickness, tickmarks, font sizes, etc. to make our graph exactly what we need for publication.    We can specify a viewing window using arguments xlim and ylim inside axes_name.set() and graph vectors using axes_name.quiver .       Plot two different parametric curves on the same axes. Your graph should include a title, labelled axes and a legend.  Find a data set with real context and at least 10 values. Plot a scatterplot of the data and the linear regression of the data set. You don't have to use Python to find the regression, but you can if you want. Your graph should include a title, labelled axes and a legend.  Create a figure with two subplots, one visualizing a vector sum, the other visualizing a vector difference. Your graphs should include titles and legends.   "
},
{
  "id": "objectives-3",
  "level": "2",
  "url": "section-matplotlib.html#objectives-3",
  "type": "Objectives",
  "number": "1.3",
  "title": "",
  "body": "   Use Matplotlib to graph curves.    Use Matplotlib to make a scatterplot.    Use Matplotlib to graph vectors.    Label the axes on a graph and customize features.    Create multiple subplots.    "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "section-matplotlib.html#exercise-11",
  "type": "You Try",
  "number": "1.8",
  "title": "",
  "body": "Change both of the above sets of code to whole number inputs from 0 to 6.   What happens to your line?    What happens to your sine curve?    "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "section-matplotlib.html#exercise-12",
  "type": "You Try",
  "number": "1.9",
  "title": "",
  "body": "Change the above code to use arange() instead of linspace() to set up your inputs. What is the smallest step size that makes the curve look smooth? "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "section-matplotlib.html#exercise-13",
  "type": "You Try",
  "number": "1.10",
  "title": "",
  "body": "Change the above code to graph with a traditional input window like [-10,10]. "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "section-matplotlib.html#exercise-14",
  "type": "You Try",
  "number": "1.11",
  "title": "",
  "body": "Notice that if you don't specify the inputs, pyplot uses a default set instead. Change the above code and remove the second call for the inputs X in graph.plot(). What is the default input window pyplot uses for Y2? "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "section-matplotlib.html#exercise-15",
  "type": "You Try",
  "number": "1.12",
  "title": "",
  "body": "Change the above code to add a third function on the same graph. "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "section-matplotlib.html#exercise-16",
  "type": "You Try",
  "number": "1.13",
  "title": "",
  "body": "Adjust the code in any plot above to make it into a scatter plot instead.  Replace ax.plot() with ax.scatter() in the code.  "
},
{
  "id": "exercise-17",
  "level": "2",
  "url": "section-matplotlib.html#exercise-17",
  "type": "You Try",
  "number": "1.14",
  "title": "",
  "body": "Note that the above code graphs the unit circle. Play with the above functions for and to see what other interesting curves you can graph. In particular, when you have the parameter , can you create  a line?  a different circle?  a parabola?   "
},
{
  "id": "exercise-18",
  "level": "2",
  "url": "section-matplotlib.html#exercise-18",
  "type": "You Try",
  "number": "1.15",
  "title": "",
  "body": "Search online for a way to change the tick labels in Matplotlib. Try and adjust the \"Falling Body\" graph to have tickmarks every quarter of a second. "
},
{
  "id": "exercise-19",
  "level": "2",
  "url": "section-matplotlib.html#exercise-19",
  "type": "You Try",
  "number": "1.16",
  "title": "",
  "body": "Try various viewing windows in the above code. What do you notice about the size of your arrow? "
},
{
  "id": "exercise-20",
  "level": "2",
  "url": "section-matplotlib.html#exercise-20",
  "type": "You Try",
  "number": "1.17",
  "title": "",
  "body": "Try various vectors and viewing windows in the above code. "
},
{
  "id": "exercise-21",
  "level": "2",
  "url": "section-matplotlib.html#exercise-21",
  "type": "You Try",
  "number": "1.18",
  "title": "",
  "body": "Try various vectors and viewing windows in the above code. Also add a horizontal and vertical axis at and using the code found in the second Customizing example. "
},
{
  "id": "exercise-22",
  "level": "2",
  "url": "section-matplotlib.html#exercise-22",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "Plot two different parametric curves on the same axes. Your graph should include a title, labelled axes and a legend. "
},
{
  "id": "exercise-23",
  "level": "2",
  "url": "section-matplotlib.html#exercise-23",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "Find a data set with real context and at least 10 values. Plot a scatterplot of the data and the linear regression of the data set. You don't have to use Python to find the regression, but you can if you want. Your graph should include a title, labelled axes and a legend. "
},
{
  "id": "exercise-24",
  "level": "2",
  "url": "section-matplotlib.html#exercise-24",
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
  "body": " Matplotlib and 3D graphing   Now that we have some experience making 2D graphs, let's learn how to make 3D graphs. Note that we can graph both curves and surfaces in 3D. If you have taken a multivariable class hopefully you remember that surfaces arise as solutions to equations of three variables, while points on a space curve are parametric equations or vector-valued functions. The code for the points on a space curve is a little more straightforward so we will start with those examples.      Use Matplotlib to graph parametric curves in 3D.    Use Matplotlib to graph surfaces and scatterplots in 3D.      3D axes  First, for 3D graphs we will need to add 3D plots to our figure using the keyword projection='3d' . Read through and run the code below to see the default 3D axes.     Parametric Curves in 3D  Matplotlib graphs 3D curves by plotting points and connecting the dots. The , , and coordinates are still given by numpy arrays and then plotted on the axes.  Run the code below to graph the equation of a line between the points and .   Edit the above code to graph the equation of a line between the points and .  Edit the above code to add a third number to each numpy array. What happens? Can you explain what plot() just graphed?  We can also graph curves by making coordinates dependent on another. For example, the curve below looks like a parabola in the -direction above the shadow    As before, we need enough input points to get a smooth curve.  Parametric curves in 3D are just like 2D (see ( )) with an added -coordinate. For example, we can graph a horizontal circle at using              Play with the above code for , , and to see what other interesting curves you can create. In 3-space can you graph  a line?  a spiral?  a different circle?      Surfaces and scatterplots in 3D  To graph a surface or 3D scatterplot, we will need two-dimensional numpy arrays for all of our inputs and outputs. As a shortcut we can create 1D arrays for the and inputs first, then use NumPy's function meshgrid() to create a coordinate grid of inputs (two 2D arrays). Last we define our outputs on that coordinate grid.  The function scatter() will plot a scatterplot just like in 2D. The function plot_surface() plots the points and connect those dots with a surface. Just like we need enough points to get a curve that looks smooth, we will need enough points to get a surface that looks smooth.  Run the code below trying both the command plot_surface() (current default) and scatter() to see the difference.   For the surface, increase the step in each input and run the above code again. When does the surface start to look polygonal instead of smooth?  Modify the above code to graph the surface . Choose a reasonable range of inputs that shows the important features of the graph.  Change the surface to . What step size is needed to make the input window [-2,2] and [-2,2] display a smooth surface?  As in the 2D case, the function scatter() plots the points without connecting the dots.    Axes and Labels  Adding titles or labels to our 3D axes uses the same commands as in 2D. the commands set_title(\"title_here\") , set_xlabel(\"label_here\") , set_ylabel(\"label_here\") .   In the above code, use parallel syntax to add a label to the -axis.  Note that the default viewing window makes the -axis positive left to right and -axis positive front to back. Something new in the 3D setting, however, is the ability to choose our viewing angle for the 3D axes using view_init(elev= , azim=, roll=) .  In the code below, play with the values for elev , azim and roll .   What does each change?  What custom viewing angle do you think showcases this particular surface the best?       Plotting Multiple Surfaces  Unfortunately Matplotlib does NOT actually graph in 3D, but paints each surface in a 2D projection, one on top of the other, which can cause the resulting graphs to look weird. Sometimes it is enough to change the viewing angle.  In the above code add a second surface to your graph using Z2 for the new outputs and ax.plot_surface(X,Y,Z2) .   Can you find a viewing angle where both surfaces look good?    Can you find a viewing angle where they don't quite look right?     A possible workaround involves making the surfaces transparent and plotting their intersection as well. If you find another workaround that is fairly simple and doesn't involve dark magic and paying with programmer souls as one stack overflow user suggested, let us know and we can include it in future iterations of this book.  Run the code below to see a Matplotlib 3D fail.   You can make your graphs transparent using the argument alpha = inside plot_surface .  In the code above add alpha=0.5 after each of Z1, Z2, and Z3 inside plot_surface to see a partial fix. Play with values of alpha to see which transparency setting you prefer. You can also graph the lines of intersection for each plane, which we will do later in the term.    Customizing  Like in 2D, we can customize our plots: the style, colors, markers, meshes, contours, line width, etc. There are many features available that we didn't cover here, but hopefully you have enough to get you started with 3D graphing using Matplotlib in Python.  So how do you learn more?  Look up Matplotlib's documentation on the web and find their page of examples, 3D plotting . Pick a 3D graph you want to learn to code and use the cell below to try it out. How is what you found different than what you learned in this section? Experiment by adjusting Matplotlib's example code to see what happens.     This section gave us just an introduction to 3D graphing possibilities using Matplotlib in Python. We will continue to learn more about graphing as we move into using Python for matrix algebra.    Summary     We can add 3D graphs and axes using the argument projection='3d' inside pyplot's axes command.    We can plot curves using plot() and three numpy arrays representing the , , and -coordinates for points on our curve.    We can use numpy.meshgrid() to create input coordinates on a grid and then use plot_surface() or scatter() to plot a surface or scatter plot on 3D axes.    As before we need enough points for plot_surface() or plot() to make smooth graphs.       The function meshgrid() has other uses, so it is nice to familiarize yourself with what it actually does. First make two small Numpy arrays, say one, X, with three entries and the other, Y, with five entries. Next make a meshgrid() of those two arrays and print the result. What do you notice?    Experiment with different sizes of arrays X and Y. Explain in your own words what meshgrid does with the two arrays. Demonstrate with some example code.    What happens if you multiply the arrays that result from meshgrid together? Demonstrate with some example code.     In one figure create a gallery of examples containing at least one of each:   A curve in 3D    A suface in 3D    A scatterplot in 3D   Make sure your graphs are appropriately labelled for your reader.  Look up Matplotlib’s documentation on the web and find their page of examples, 3D plotting. Pick a 3D graph you want to learn to code and try it out. Experiment with the code to make it your own. How is what you found different than what you learned in this section? Explain.   "
},
{
  "id": "objectives-4",
  "level": "2",
  "url": "section-matplotlib3d.html#objectives-4",
  "type": "Objectives",
  "number": "1.4",
  "title": "",
  "body": "   Use Matplotlib to graph parametric curves in 3D.    Use Matplotlib to graph surfaces and scatterplots in 3D.    "
},
{
  "id": "exercise-25",
  "level": "2",
  "url": "section-matplotlib3d.html#exercise-25",
  "type": "You Try",
  "number": "1.19",
  "title": "",
  "body": "Edit the above code to graph the equation of a line between the points and . "
},
{
  "id": "exercise-26",
  "level": "2",
  "url": "section-matplotlib3d.html#exercise-26",
  "type": "You Try",
  "number": "1.20",
  "title": "",
  "body": "Edit the above code to add a third number to each numpy array. What happens? Can you explain what plot() just graphed? "
},
{
  "id": "exercise-27",
  "level": "2",
  "url": "section-matplotlib3d.html#exercise-27",
  "type": "You Try",
  "number": "1.21",
  "title": "",
  "body": "Play with the above code for , , and to see what other interesting curves you can create. In 3-space can you graph  a line?  a spiral?  a different circle?   "
},
{
  "id": "exercise-28",
  "level": "2",
  "url": "section-matplotlib3d.html#exercise-28",
  "type": "You Try",
  "number": "1.22",
  "title": "",
  "body": "Run the code below trying both the command plot_surface() (current default) and scatter() to see the difference. "
},
{
  "id": "exercise-29",
  "level": "2",
  "url": "section-matplotlib3d.html#exercise-29",
  "type": "You Try",
  "number": "1.23",
  "title": "",
  "body": "For the surface, increase the step in each input and run the above code again. When does the surface start to look polygonal instead of smooth? "
},
{
  "id": "exercise-30",
  "level": "2",
  "url": "section-matplotlib3d.html#exercise-30",
  "type": "You Try",
  "number": "1.24",
  "title": "",
  "body": "Modify the above code to graph the surface . Choose a reasonable range of inputs that shows the important features of the graph. "
},
{
  "id": "exercise-31",
  "level": "2",
  "url": "section-matplotlib3d.html#exercise-31",
  "type": "You Try",
  "number": "1.25",
  "title": "",
  "body": "Change the surface to . What step size is needed to make the input window [-2,2] and [-2,2] display a smooth surface? "
},
{
  "id": "exercise-32",
  "level": "2",
  "url": "section-matplotlib3d.html#exercise-32",
  "type": "You Try",
  "number": "1.26",
  "title": "",
  "body": "In the above code, use parallel syntax to add a label to the -axis. "
},
{
  "id": "exercise-33",
  "level": "2",
  "url": "section-matplotlib3d.html#exercise-33",
  "type": "You Try",
  "number": "1.27",
  "title": "",
  "body": "In the code below, play with the values for elev , azim and roll .   What does each change?  What custom viewing angle do you think showcases this particular surface the best?   "
},
{
  "id": "exercise-34",
  "level": "2",
  "url": "section-matplotlib3d.html#exercise-34",
  "type": "You Try",
  "number": "1.28",
  "title": "",
  "body": "In the above code add a second surface to your graph using Z2 for the new outputs and ax.plot_surface(X,Y,Z2) .   Can you find a viewing angle where both surfaces look good?    Can you find a viewing angle where they don't quite look right?    "
},
{
  "id": "exercise-35",
  "level": "2",
  "url": "section-matplotlib3d.html#exercise-35",
  "type": "You Try",
  "number": "1.29",
  "title": "",
  "body": "Run the code below to see a Matplotlib 3D fail. "
},
{
  "id": "exercise-36",
  "level": "2",
  "url": "section-matplotlib3d.html#exercise-36",
  "type": "You Try",
  "number": "1.30",
  "title": "",
  "body": "In the code above add alpha=0.5 after each of Z1, Z2, and Z3 inside plot_surface to see a partial fix. Play with values of alpha to see which transparency setting you prefer. You can also graph the lines of intersection for each plane, which we will do later in the term. "
},
{
  "id": "exercise-37",
  "level": "2",
  "url": "section-matplotlib3d.html#exercise-37",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "The function meshgrid() has other uses, so it is nice to familiarize yourself with what it actually does. First make two small Numpy arrays, say one, X, with three entries and the other, Y, with five entries. Next make a meshgrid() of those two arrays and print the result. What do you notice?    Experiment with different sizes of arrays X and Y. Explain in your own words what meshgrid does with the two arrays. Demonstrate with some example code.    What happens if you multiply the arrays that result from meshgrid together? Demonstrate with some example code.    "
},
{
  "id": "exercise-38",
  "level": "2",
  "url": "section-matplotlib3d.html#exercise-38",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "In one figure create a gallery of examples containing at least one of each:   A curve in 3D    A suface in 3D    A scatterplot in 3D   Make sure your graphs are appropriately labelled for your reader. "
},
{
  "id": "exercise-39",
  "level": "2",
  "url": "section-matplotlib3d.html#exercise-39",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "Look up Matplotlib’s documentation on the web and find their page of examples, 3D plotting. Pick a 3D graph you want to learn to code and try it out. Experiment with the code to make it your own. How is what you found different than what you learned in this section? Explain. "
},
{
  "id": "section-animation",
  "level": "1",
  "url": "section-animation.html",
  "type": "Section",
  "number": "1.5",
  "title": "Basic Animation",
  "body": " Basic Animation  In this section we will create some basic animations, by creating frames for the animation in Matplotlib.     Create an interactive plot with a slider.    Create a gif animating a graph.      Animating in Matplotlib  This first example uses interact to create a slider to plot one point at a time. We will need to create two user defined (computer science) functions: one that increments through the input points for the slider and another that plots the graph for just those input points.     Play with various graph features and customizations.    Change the number of frames to see how the interactive is affected.    Try aligning and misaligning the number of frames and the number of inputs plotted.   Here is the same interactive for projectile motion.   Matplotlib has a module called animation with a FuncAnimation class that allows you easily make frames of a graph. A class called PillowWriter allows you to grab frames and save them to a file to make gifs.   Here is an example animating two curves on the same graph.   What graph do you want to animate? Create it!    Matplotlib allows you to not only graph, but make your graphs interactive. You can use interact to create interactive elements. The animation module can be used to animate your graphs. Hopefully this is enough to get you started.    Summary     We can use interact to create a slider element and create two user defined functions: one that takes the slider information to create points and another that makes graphs for just those points.      The FuncAnimation > class can be used to animate your graphs and PillowWriter saves those frames into a gif.       Showcase your skills from so far in the term to create an animated graph in Matplotlib for any other class (and using one feature we haven't learned in class).   "
},
{
  "id": "objectives-5",
  "level": "2",
  "url": "section-animation.html#objectives-5",
  "type": "Objectives",
  "number": "1.5",
  "title": "",
  "body": "   Create an interactive plot with a slider.    Create a gif animating a graph.    "
},
{
  "id": "exercise-40",
  "level": "2",
  "url": "section-animation.html#exercise-40",
  "type": "You Try",
  "number": "1.31",
  "title": "",
  "body": "  Play with various graph features and customizations.    Change the number of frames to see how the interactive is affected.    Try aligning and misaligning the number of frames and the number of inputs plotted.  "
},
{
  "id": "exercise-41",
  "level": "2",
  "url": "section-animation.html#exercise-41",
  "type": "You Try",
  "number": "1.32",
  "title": "",
  "body": "What graph do you want to animate? Create it! "
},
{
  "id": "exercise-42",
  "level": "2",
  "url": "section-animation.html#exercise-42",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "Showcase your skills from so far in the term to create an animated graph in Matplotlib for any other class (and using one feature we haven't learned in class). "
},
{
  "id": "section-systems",
  "level": "1",
  "url": "section-systems.html",
  "type": "Section",
  "number": "2.1",
  "title": "Solving and Graphing Systems of Linear Equations",
  "body": " Solving and Graphing Systems of Linear Equations  Systems of linear equations can be solved using multiple methods. In this section we will learn how to solve systems of linear equations using a process called row reduction. Row reduction is sometimes called Gaussian elimination, after the mathematician Gauss. Long before Gauss, Chinese scholars demonstrated this method of solving systems of linear equations in chapter 8 of The Nine Chapters on the Mathematical Art. .      Row reduce matrices representing systems of linear equations using the Python library Sympy.    Graph solutions to systems of linear equations of two or three variables.    Graph solutions to vector equations in and .    Use the pivots of a reduced augmented matrix to determine if a system has no solution, a unique solution, or infinitely many solutions      Row Reduction  Note that row reduction involves symbolic manipulation. Since Numpy is focused on number crunching, we will need a different Python library called Sympy to do the symbolic manipulation of row reduction to reduced echelon form and row reduced echelon form.  In order to row reduce a system of linear equations we convert our system into an augmented matrix.   Augmented Matrix   For example, the system becomes     In Sympy, matrices are entered using the function Matrix .   Edit the above code to print the augmented matrix for the system of linear equations in .  The Sympy functions echelon_form() and rref() can be used to row reduce a matrix to reduced echelon form and row reduced echelon form, respectively. If you need a refresher on these two forms, read section (insert reference here).  Edit the code below to print the reduced echelon form and the row reduced echelon form for the augmented matrix of the system of linear equations from .   Note that rref() returns not only the row reduced echelon form of a matrix, but also a tuple that tells you which columns have leading values of 1. These columns are called pivot columns , and give you a quick way to see any free variables (which are non-pivot columns).  Edit the code above for various augmented matrices to see how the tuple returned by rref() relates to the pivot columns.  Recall that a system of linear equations either has   no solution,    a unique solution, or    infinitely many solutions.   If you need a refresher on how to interpret the reduced echelon form of an augmented matrix to determine if there is no solution, write down the unique solution, or give the infinitely many solutions in parametric form, see section (insert section here).    Graphing solutions to systems of equations  In order to graph solutions to systems of linear equations with two or three variables you can graph the corresponding lines, planes, or coordinates.   The system has solutions and .  Linear equations with two variables can be graphed as lines in the xy-plane, either by plotting two points on the line or solving for . The solution is one point in a scatter plot.    Edit the code in to clearly indicate the solution and on the graph.  Systems of equations with three variables must be graphed in 3D. As mentioned in , Matplotlib paints 2D projections of each surface on top of the other which doesn't adequately graph their relationships. We can partially fix this by making the surfaces transparent and explicitly plotting their intersections. The intersection of any two non-parallel planes is a line which can be found by solving the system of the two plane equations and writing the solution in parametric form.   Graph solutions to the system by finding the equations of the lines of intersection of the planes and plotting the planes, the lines, and the point of intersection.  Solution 1 walks through the process, followed by a Python implementation of the rref() .   First row reducing the augmented matrix for the system of all three equations we obtain a unique solution , , .  Row reducing the augmented matrix for the first two equations we obtain which can be written in parametric form,   Row reducing the augmented matrix for the last two equations we obtain which can be written in parametric form,   Row reducing the augmented matrix for the first and last equations we obtain which can be written in parametric form,     Next we will use Matplotlib to graph these results. First note that if we are careless with our input domains for the planes and lines, our graph will be inconsistent.   Note: you can change the viewing angle to try and get a better graph.  The real problem in the code above is that we graph our surfaces with domain and , but use for the parametric equation of our lines. There are several fixes for this.  One fix is to adjust the parametric input values for the lines to better match the planes. For example, you can make to get a more consistent graph. Try several adjustments for the range in the above code. To get a fully consistent graph, each line would need a different parametric domain that matches the domain of the planes.  Another fix is to solve each pair of equations for two points on the line in the domain of the planes. You can then plot the line between the two points.  Solution 2 walks through the process of finding the points, followed by an alternative Python implementation to graph the solutions.   Recall the first two equations intersect in the line Solving for when , we see . Plugging into the parametric equation for the line we obtain the point . Similarly when , we find , giving the point .  The last two equations intersect in the line Here is always . Instead we solve for when and . We find and , giving us the two points and .  The first and last equations intersect in the line Here when giving us the points and .  Recall to plot the lines between two points we create arrays of the -values, -values, and -values, then plot the line between them.    Can you find other fixes? If so, share them so we can add them here.      Graphing vector equations and their solutions  Recall that solving a vector equation is equivalent to solving a system of equations.   For example the vector equation corresponds to the linear system found in and still has solution and .  The solution to the vector equation can be graphed using linear combinations of vectors. That is,       Converting between Numpy arrays and Sympy Matrices  Since Numpy and Sympy are different libraries, we will need to either enter our augmented matrix as a Sympy matrix, or convert a numpy array into a sympy matrix in order to call the row reducing function in Sympy.     Summary     TBD      TBD       The system has a unique solution. Use Python code to find the solution. Graph the system of equations and the solution using Matplot3D. Lable your axes. Note: part of the challenge is making sure you have a good viewing window and perspective so the graph helps illuminate the solution.    "
},
{
  "id": "objectives-6",
  "level": "2",
  "url": "section-systems.html#objectives-6",
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
  "id": "exercise-43",
  "level": "2",
  "url": "section-systems.html#exercise-43",
  "type": "You Try",
  "number": "2.2",
  "title": "",
  "body": "Edit the above code to print the augmented matrix for the system of linear equations in . "
},
{
  "id": "exercise-44",
  "level": "2",
  "url": "section-systems.html#exercise-44",
  "type": "You Try",
  "number": "2.3",
  "title": "",
  "body": "Edit the code below to print the reduced echelon form and the row reduced echelon form for the augmented matrix of the system of linear equations from . "
},
{
  "id": "exercise-45",
  "level": "2",
  "url": "section-systems.html#exercise-45",
  "type": "You Try",
  "number": "2.4",
  "title": "",
  "body": "Edit the code above for various augmented matrices to see how the tuple returned by rref() relates to the pivot columns. "
},
{
  "id": "twodsolutions",
  "level": "2",
  "url": "section-systems.html#twodsolutions",
  "type": "Example",
  "number": "2.5",
  "title": "",
  "body": " The system has solutions and .  Linear equations with two variables can be graphed as lines in the xy-plane, either by plotting two points on the line or solving for . The solution is one point in a scatter plot.   "
},
{
  "id": "exercise-46",
  "level": "2",
  "url": "section-systems.html#exercise-46",
  "type": "You Try",
  "number": "2.6",
  "title": "",
  "body": "Edit the code in to clearly indicate the solution and on the graph. "
},
{
  "id": "threedsolutions1",
  "level": "2",
  "url": "section-systems.html#threedsolutions1",
  "type": "Example",
  "number": "2.7",
  "title": "",
  "body": " Graph solutions to the system by finding the equations of the lines of intersection of the planes and plotting the planes, the lines, and the point of intersection.  Solution 1 walks through the process, followed by a Python implementation of the rref() .   First row reducing the augmented matrix for the system of all three equations we obtain a unique solution , , .  Row reducing the augmented matrix for the first two equations we obtain which can be written in parametric form,   Row reducing the augmented matrix for the last two equations we obtain which can be written in parametric form,   Row reducing the augmented matrix for the first and last equations we obtain which can be written in parametric form,     Next we will use Matplotlib to graph these results. First note that if we are careless with our input domains for the planes and lines, our graph will be inconsistent.   Note: you can change the viewing angle to try and get a better graph.  The real problem in the code above is that we graph our surfaces with domain and , but use for the parametric equation of our lines. There are several fixes for this.  One fix is to adjust the parametric input values for the lines to better match the planes. For example, you can make to get a more consistent graph. Try several adjustments for the range in the above code. To get a fully consistent graph, each line would need a different parametric domain that matches the domain of the planes.  Another fix is to solve each pair of equations for two points on the line in the domain of the planes. You can then plot the line between the two points.  Solution 2 walks through the process of finding the points, followed by an alternative Python implementation to graph the solutions.   Recall the first two equations intersect in the line Solving for when , we see . Plugging into the parametric equation for the line we obtain the point . Similarly when , we find , giving the point .  The last two equations intersect in the line Here is always . Instead we solve for when and . We find and , giving us the two points and .  The first and last equations intersect in the line Here when giving us the points and .  Recall to plot the lines between two points we create arrays of the -values, -values, and -values, then plot the line between them.    Can you find other fixes? If so, share them so we can add them here.   "
},
{
  "id": "example-4",
  "level": "2",
  "url": "section-systems.html#example-4",
  "type": "Example",
  "number": "2.8",
  "title": "",
  "body": " For example the vector equation corresponds to the linear system found in and still has solution and .  The solution to the vector equation can be graphed using linear combinations of vectors. That is,    "
},
{
  "id": "exercise-47",
  "level": "2",
  "url": "section-systems.html#exercise-47",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "The system has a unique solution. Use Python code to find the solution. Graph the system of equations and the solution using Matplot3D. Lable your axes. Note: part of the challenge is making sure you have a good viewing window and perspective so the graph helps illuminate the solution.  "
},
{
  "id": "section-matrices",
  "level": "1",
  "url": "section-matrices.html",
  "type": "Section",
  "number": "2.2",
  "title": "Matrix Arithmetic",
  "body": " Matrix Arithmetic  In this section we will learn how to     Add, subtract, scale, and multiply matrices in Numpy    Find matrix inverses    Use matrix inverses to solve systems of linear equations      Title          Summary     blah      blah         "
},
{
  "id": "objectives-7",
  "level": "2",
  "url": "section-matrices.html#objectives-7",
  "type": "Objectives",
  "number": "2.2",
  "title": "",
  "body": "   Add, subtract, scale, and multiply matrices in Numpy    Find matrix inverses    Use matrix inverses to solve systems of linear equations    "
},
{
  "id": "exercise-48",
  "level": "2",
  "url": "section-matrices.html#exercise-48",
  "type": "You Try",
  "number": "2.9",
  "title": "",
  "body": ""
},
{
  "id": "exercise-49",
  "level": "2",
  "url": "section-matrices.html#exercise-49",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": ""
},
{
  "id": "sec-points",
  "level": "1",
  "url": "sec-points.html",
  "type": "Section",
  "number": "3.1",
  "title": "Points",
  "body": "    Points  Each point in two dimensions may be labeled by two coordinates This is why the -plane is called two dimensional  the name of each point consists of two real numbers. which specify the position of the point in some units with respect to some axes as in the figure below.     The set of all points in two dimensions is denoted Not surprisingly, the in signifies that each point is labelled by two numbers and the in signifies that the numbers in question are real numbers. There are more advanced applications (for example in signal analysis and in quantum mechanics) where complex numbers are used. The space of all pairs , with and complex numbers is denoted .  . Observe that  the distance from the point to the -axis is   if , then is above the -axis and if , then is below the -axis  the distance from the point to the -axis is   if , then is to the right of the -axis and if , then is to the left of the -axis  the distance from the point to the origin is   Similarly, each point in three dimensions may be labeled by three coordinates , as in the two figures below.      The set of all points in three dimensions is denoted . The plane that contains, for example, the - and -axes is called the -plane.  The -plane is the set of all points that satisfy .  The -plane is the set of all points that satisfy .  The -plane is the set of all points that satisfy .  More generally,  The set of all points that obey is a plane that is parallel to the -plane and is a distance from it. If , the plane is above the -plane. If , the plane is below the -plane. We say that the plane is a signed distance from the -plane.  The set of all points that obey is a plane that is parallel to the -plane and is a signed distance from it.  The set of all points that obey is a plane that is parallel to the -plane and is a signed distance from it.         Observe that our 2d distances extend quite easily to 3d.  the distance from the point to the -plane is   the distance from the point to the -plane is   the distance from the point to the -plane is   the distance from the point to the origin is   To see that the distance from the point to the origin is indeed ,  apply Pythagoras to the right-angled triangle with vertices , and to see that the distance from to is and then  apply Pythagoras to the right-angled triangle with vertices , and to see that the distance from to is .       More generally, the distance from the point to the point is Notice that this gives us the equation for a sphere quite directly. All the points on a sphere are equidistant from the centre of the sphere. So, for example, the equation of the sphere centered on with radius , that is, the set of all points whose distance from is , is   Here is an example in which we sketch a region in the -plane that is specified using inequalities.   In this example, we sketch the region in the -plane.  We do so in two steps. In the first step, we sketch the curves , , and .  By completing squares, we see that the equation is equivalent to , which is the circle of radius centred on . It is sketched in the figure below.  By completing squares, we see that the equation is equivalent to , which is the circle of radius centred on . It is sketched in the figure below.  The point obeys if and only if it is a distance vertically above the -axis. So is the line that is parallel to the -axis and is one unit above it. This line is also sketched in the figure below.       In the second step we determine the impact that the inequalities have.  The inequality is equivalent to and hence is equivalent to . So the point satisfies if and only if the distance from to is at least , i.e. if and only if is outside (or on) the circle .  The inequality is equivalent to and hence is equivalent to . So the point satisfies the inequality if and only if the distance from to is at most , i.e. if and only if is inside (or on) the circle .  The point obeys if and only if is a vertical distance at least above the -axis, i.e. is above (or on) the line .   So the region consists of all points that  are inside or on the circle and are also outside or on the circle and are also above or on the line .  It is the shaded region in the figure below.         Here are a couple of examples that involve spheres.   In this example, we are going to find the curve formed by the intersection of the -plane and the sphere of radius centred on .  The point lies on the -plane if and only if , and lies on the sphere of radius centred on if and only if . So the point lies on the curve of intersection if and only if both and , or equivalently This is the circle in the -plane that is centred on the origin and has radius . Here is a sketch that show the parts of the sphere and the circle of intersection that are in the first octant. That is, that have , and .       In this example, we are going to find all points for which the distance from to is twice the distance from to the origin .  The distance from to is . The distance from to is . So we want to find all points for which Squaring both sides of this equation gives Collecting up terms gives This is the sphere of radius centred on .    "
},
{
  "id": "example-5",
  "level": "2",
  "url": "sec-points.html#example-5",
  "type": "Example",
  "number": "3.1",
  "title": "",
  "body": " In this example, we sketch the region in the -plane.  We do so in two steps. In the first step, we sketch the curves , , and .  By completing squares, we see that the equation is equivalent to , which is the circle of radius centred on . It is sketched in the figure below.  By completing squares, we see that the equation is equivalent to , which is the circle of radius centred on . It is sketched in the figure below.  The point obeys if and only if it is a distance vertically above the -axis. So is the line that is parallel to the -axis and is one unit above it. This line is also sketched in the figure below.       In the second step we determine the impact that the inequalities have.  The inequality is equivalent to and hence is equivalent to . So the point satisfies if and only if the distance from to is at least , i.e. if and only if is outside (or on) the circle .  The inequality is equivalent to and hence is equivalent to . So the point satisfies the inequality if and only if the distance from to is at most , i.e. if and only if is inside (or on) the circle .  The point obeys if and only if is a vertical distance at least above the -axis, i.e. is above (or on) the line .   So the region consists of all points that  are inside or on the circle and are also outside or on the circle and are also above or on the line .  It is the shaded region in the figure below.        "
},
{
  "id": "example-6",
  "level": "2",
  "url": "sec-points.html#example-6",
  "type": "Example",
  "number": "3.2",
  "title": "",
  "body": " In this example, we are going to find the curve formed by the intersection of the -plane and the sphere of radius centred on .  The point lies on the -plane if and only if , and lies on the sphere of radius centred on if and only if . So the point lies on the curve of intersection if and only if both and , or equivalently This is the circle in the -plane that is centred on the origin and has radius . Here is a sketch that show the parts of the sphere and the circle of intersection that are in the first octant. That is, that have , and .     "
},
{
  "id": "example-7",
  "level": "2",
  "url": "sec-points.html#example-7",
  "type": "Example",
  "number": "3.3",
  "title": "",
  "body": " In this example, we are going to find all points for which the distance from to is twice the distance from to the origin .  The distance from to is . The distance from to is . So we want to find all points for which Squaring both sides of this equation gives Collecting up terms gives This is the sphere of radius centred on .  "
},
{
  "id": "sec_vectors",
  "level": "1",
  "url": "sec_vectors.html",
  "type": "Section",
  "number": "3.2",
  "title": "Vectors",
  "body": " Vectors   In many of our applications in 2d and 3d, we will encounter quantities that have both a magnitude (like a distance) and also a direction. Such quantities are called vectors. That is, a vector is a quantity which has both a direction and a magnitude, like a velocity. If you are moving, the magnitude (length) of your velocity vector is your speed (distance travelled per unit time) and the direction of your velocity vector is your direction of motion. To specify a vector in three dimensions you have to give three components, just as for a point. To draw the vector with components you can draw an arrow from the point to the point .      Similarly, to specify a vector in two dimensions you have to give two components and to draw the vector with components you can draw an arrow from the point to the point .  There are many situations in which it is preferable to draw a vector with its tail at some point other than the origin. For example, it is natural to draw the velocity vector of a moving particle with the tail of the velocity vector at the position of the particle, whether or not the particle is at the origin. The sketch below shows a moving particle and its velocity vector at two different times.     As a second example, suppose that you are analyzing the motion of a pendulum. There are three forces acting on the pendulum bob: gravity , which is pulling the bob straight down, tension in the rod, which is pulling the bob in the direction of the rod, and air resistance , which is pulling the bob in a direction opposite to its direction of motion. All three forces are acting on the bob. So it is natural to draw all three arrows representing the forces with their tails at the bob.     In this text, we will used bold faced letters, like , , , to designate vectors. In handwriting, it is clearer to use a small overhead arrow Some people use an underline, as in , rather than an arrow. , as in , , , instead. Also, when we want to emphasise that some quantity is a number, rather than a vector, we will call the number a scalar .  Both points and vectors in 2d are specified by two numbers. Until you get used to this, it might confuse you sometimes does a given pair of numbers represent a point or a vector? To distinguish Or, in the Wikipedia jargon, disambiguate. between the components of a vector and the coordinates of the point at its head, when its tail is at some point other than the origin, we shall use angle brackets rather than round brackets around the components of a vector. For example, the figure below shows the two-dimensional vector drawn in three different positions. In each case, when the tail is at the point the head is at . We warn you that, out in the real world OK. OK. Out in that (admittedly very small) part of the real world that actually knows what a vector is. , no one uses notation that distinguishes between components of a vector and the coordinates of its head usually round brackets are used for both. It is up to you to keep straight which is being referred to.     By way of summary,    we use  bold faced letters, like , , , to designate vectors, and  angle brackets, like , around the components of a vector, but use  round brackets, like , around the coordinates of a point, and use   scalar to emphasise that some quantity is a number, rather than a vector.       Addition of Vectors and Multiplication of a Vector by a Scalar  Just as we have done many times in the CLP texts, when we define a new type of object, we want to understand how it interacts with the basic operations of addition and multiplication. Vectors are no different, and we shall shortly see a natural way to define addition of vectors. Multiplication will be more subtle, and we shall start with multiplication of a vector by a number (rather than with multiplication of a vector by another vector).  By way of motivation for the definitions of addition and multiplication by a number, imagine that we are out for a walk on the -plane.  Suppose that we take a step and, in doing so, we move units parallel to the -axis and units parallel to the -axis. Then we say that is the displacement vector for the step. Suppose now that we take a second step which moves us an additional units parallel to the -axis and an additional units parallel to the -axis, as in the figure on the left below. So the displacement vector for the second step is . All together, we have moved units parallel to the -axis and units parallel to the -axis. The displacement vector for the two steps combined is . We shall define the sum of and , denoted by , to be .  Suppose now that, instead, we decide to step in the same direction as the first step above, but to move twice as far, as in the figure on the right below. That is, our step will move us units in the direction of the -axis and units in the direction of the -axis and the corresponding displacement vector will be . We shall define the product of the number and the vector , denoted by , to be .        Here are the formal definitions.   Adding Vectors and Multiplying a Vector by a Number   These two operations have the obvious definitions and similarly in three dimensions.   Pictorially, you add the vector to the vector by drawing with its tail at the head of and then drawing a vector from the tail of to the head of , as in the figure on the left below. For a number , we can draw the vector , by just  changing the vector 's length by the factor , and,  if , reversing the arrow's direction,  as in the other two figures below.       The special case of multiplication by appears so frequently that is given the shorter notation . That is, Of course is , the vector all of whose components are zero.  To subtract from pictorially, you may add (which is drawn by reversing the direction of ) to . Alternatively, if you draw and with their tails at a common point, then is the vector from the head of to the head of . That is, is the vector you must add to in order to get .     The operations of addition and multiplication by a scalar that we have just defined are quite natural and rarely cause any problems, because they inherit from the real numbers the properties of addition and multiplication that you are used to.   Properties of Addition and Scalar Multiplication  Let , and be vectors and and be scalars. Then    We have just been introduced to many definitions. Let's see some of them in action.   For example, if then and      Two vectors and   are said to be parallel if for some nonzero real number and  are said to have the same direction if for some number .     There are some vectors that occur sufficiently commonly that they are given special names. One is the vector . Some others are the standard basis vectors .    The standard basis vectors in two dimensions are      The standard basis vectors in three dimensions are        We'll explain the little hats in the notation , , shortly. Some people rename , and to , and respectively. Using the above properties we have, for all vectors, A sum of numbers times vectors, like is called a linear combination of the vectors. Thus all vectors can be expressed as linear combinations of the standard basis vectors. This makes basis vectors very helpful in computations. The standard basis vectors are unit vectors, meaning that they are of length one, where the length of a vector is denoted The notation is also used for the length of .  and is defined by  Length of a Vector   A unit vector is a vector of length one. We'll sometimes use the accent to emphasise that the vector is a unit vector. That is, .    Recall that multiplying a vector by a positive number , changes the length of the vector by a factor without changing the direction of the vector. So (assuming that  is a unit vector that has the same direction as . For example, is a unit vector that points in the same direction as .    We go for a walk on a flat Earth. We use a coordinate system with the positive x-axis pointing due east and the positive y-axis pointing due north. We  start at the origin and  walk due east for 4 units and then  walk northeast for units and then  head towards the point , but we only go  one third of the way.        We will now use vectors to figure out our final location.  On the first leg of our walk, we go 4 units in the positive -direction. So our displacement vector the vector whose tail is at our starting point and whose head is at the end point of the first leg is . As we started at we finish the first leg of the walk at .  On the second leg of our walk, our direction of motion is northeast, i.e. is above the direction of the positive -axis. Looking at the figure on the right above, we see that our displacement vector, for the second leg of the walk, has to be in the same direction as the vector . So our displacement vector is the vector of length with the same direction as . The vector has length and so has length one and our displacement vector is If we draw this displacement vector, with its tail at , the starting point of the second leg of the walk, then its head will be at and that is the end point of the second leg of the walk.  On the final leg of our walk, we start at and walk towards . The vector from to is . As we go only one third of the way, our final displacement vector is If we draw this displacement vector with its tail at , the starting point of the final leg, then its head will be at and that is the end point of the final leg of the walk, and our final location.       The Dot Product  Let's get back to the arithmetic operations of addition and multiplication. We will be using both scalars and vectors. So, for each operation there are three possibilities that we need to explore:   scalar plus scalar , scalar plus vector and vector plus vector   scalar times scalar , scalar times vector and vector times vector   We have been using scalar plus scalar and scalar times scalar since childhood. vector plus vector and scalar times vector were just defined above. There is no sensible way to define scalar plus vector , so we won't. This leaves vector times vector . There are actually two widely used such products. The first is the dot product , which is the topic of this section, and which is used to easily determine the angle (or more precisely, ) between two vectors. We'll get to the second, the cross product, later.  Here is preview of what we will do in this dot product subsection § . We are going to give two formulae for the dot product, , of the pair of vectors and .  The first formula is . We will take it as our official definition of . This formula provides us with an easy way to compute dot products.  The second formula is , where is the angle between and .     We will show, in Theorem below, that this second formula always gives the same answer as the first formula. The second formula provides us with an easy way to determine the angle between two vectors. In particular, it provides us with an easy way to test whether or not two vectors are perpendicular to each other. For example, the vectors and have dot product This tell us as the angle between the two vectors obeys , so that . That is, the two vectors are perpendicular to each other.   After we give our official definition of the dot product in Definition , and give the important properties of the dot product, including the formula , in Theorem , we'll give some examples. Finally, to see the dot product in action, we'll define what it means to project one vector on another vector and give an example.   Dot Product  The dot product of the vectors and is denoted and is defined by in two and three dimensions respectively.   The properties of the dot product are as follows:   Properties of the Dot Product   Let , and be vectors and let be a scalar. Then      Properties 0 through 5 are almost immediate consequences of the definition. For example, for property 3 (which is called the distributive law) in dimension 2,   Property 6 is sufficiently important that it is often used as the definition of dot product. It is not at all an obvious consequence of the definition. To verify it, we just write in two different ways. The first expresses in terms of . It is Here, , for example, means that the equality is a consequence of property 1. The second way we write involves and follows from the cosine law for triangles. Just in case you don't remember the cosine law, we'll derive it right now! Start by applying Pythagoras to the shaded triangle in the right hand figure of     That triangle is a right triangle whose hypotenuse has length and whose other two sides have lengths and . So Pythagoras gives This is precisely the cosine law You may be used to seeing it written as , where , and are the lengths of the three sides of the triangle and is the angle opposite the side of length  . Observe that, when , this reduces to, (surprise!) Pythagoras' theorem.  Setting our two expressions for equal to each other, cancelling the and common to both sides and dividing by gives which is exactly property 6.  Property 7 follows directly from property 6. First note that the dot product is zero if and only if at least one of the three factors is zero. The first factor is zero if and only if . The second factor is zero if and only if . The third factor is zero if and only if , for some integer , which in turn is true if and only if and are mutually perpendicular.   Because of Property 7 of Theorem , the dot product can be used to test whether or not two vectors are perpendicular to each other. That is, whether or not the angle between the two vectors is . Another name The concepts of the dot product and perpendicularity have been generalized a lot in mathematics (for example, from 2d and 3d vectors to functions). The generalization of the dot product is called the inner product and the generalization of perpendicularity is called orthogonality . for perpendicular is orthogonal . Testing for orthogonality is one of the main uses of the dot product.   Consider the three vectors Their dot products tell us that is perpendicular to both and . Since both the first dot product tells us that the angle, , between and obeys       Dot products are also used to compute projections. First, here's the definition.   Projection  Draw two vectors, and , with their tails at a common point and drop a perpendicular from the head of to the line that passes through both the head and tail of . By definition, the projection of the vector on the vector is the vector from the tail of to the point on the line where the perpendicular hits.        Think of the projection of on as the part of that is in the direction of .  Now let's develop a formula for the projection of on . Denote by the angle between and . If is no more than , as in the figure on the left above, the length of the projection of on is . By Property 6 of Theorem , , so the projection is a vector whose length is and whose direction is given by the unit vector . Hence If is larger than , as in the figure on the right above, the projection has length and direction . In this case too. So the formula       is applicable whenever . We may rewrite . The coefficient, , of the unit vector , is called the component of in the direction . As a special case, if happens to be a unit vector, which, for emphasis, we'll now write has , the projection formula simplifies to        In this example, we will find the projection of the vector on the vector , as in the figure     By Equation with and , that projection is    One use of projections is to resolve forces . There is an example in the next (optional) section.    (Optional) Using Dot Products to Resolve Forces The Pendulum  Model a pendulum by a mass that is connected to a hinge by an idealized rod that is massless and of fixed length . Denote by the angle between the rod and vertical. The forces acting on the mass are  gravity, which has magnitude and direction ,  tension in the rod, whose magnitude automatically adjusts itself so that the distance between the mass and the hinge is fixed at (so that the rod does not stretch or contract) and whose direction is always parallel to the rod,  and possibly some frictional forces, like friction in the hinge and air resistance. Assume that the total frictional force has magnitude proportional The behaviour of air resistance (sometimes called drag) is pretty complicated. We're using a reasonable low speed approximation. At high speeds drag is typically proportional to the square of the speed. to the speed of the mass and has direction opposite to the direction of motion of the mass. We'll call the constant of proportionality .       If we use a coordinate system centered on the hinge, the coordinates of the mass at time are where is the angle between the rod and vertical at time . We are now going to use Newton's law of motion to determine now evolves in time. By definition, the velocity and acceleration vectors For a more comprehensive treatment of derivatives of vector valued functions , and in particular of velocity and acceleration, see Section in this text and Section 1.1 in the CLP-4 text. for the position vector are So, the velocity and acceleration vectors of our mass are   The negative of the velocity vector is , so the total frictional force is with our constant of proportionality.  The vector has magnitude and direction parallel to the rod pointing from the mass towards the hinge and so is the force due to tension in the rod.  Hence, for this physical system, Newton's law of motion is This is a rather complicated looking equation. Writing out its - and -components doesn't help. They also look complicated. Instead, the equation can be considerably simplified (and consequently better understood) by taking its components parallel to and perpendicular to the direction of motion . From the velocity vector , we see that is a unit vector parallel to the direction of motion at time . Recall, from , that the projection of any vector on any unit vector (with the hat on reminding ourselves that the vector is a unit vector) is The coefficient is, by definition, the component of in the direction . So, by dotting both sides of the equation of motion with , we extract the component parallel to the direction of motion. Since this gives which is much cleaner than ! When is small, we can approximate and get the equation which is easily solved. There are systematic procedures for finding the solution, but we'll just guess.  When there is no friction (so that ), we would expect the pendulum to just oscillate. So it is natural to guess which is an oscillation with (unknown) amplitude , frequency (radians per unit time) and phase . Substituting this guess into the left hand side, , yields which is zero if . So is a solution for any amplitude and phase , provided the frequency .  When there is some, but not too much, friction, so that is relatively small, we would expect oscillation with decaying amplitude . So we guess for some constant decay rate , to be determined. With this guess, and the left hand side vanishes if and The second equation tells us the decay rate and then the first tells us the frequency When there is a lot of friction (namely when , so that the frequency is not a real number), we would expect damping without oscillation and so would guess . You can determine the allowed values of by substituting this guess in.  To extract the components perpendicular to the direction of motion, we dot with rather than . Note that, because the vector really is perpendicular to the direction of motion. Since dotting both sides of the equation of motion with gives This equation just determines the tension in the rod, once you know .    (Optional) Areas of Parallelograms  A parallelogram is naturally determined by the two vectors that define its sides. We'll now develop a formula for the area of a parallelogram in terms of these two vectors.  Construct a parallelogram as follows. Pick two vectors and . Draw them with their tails at a common point. Then draw a second time with its tail at the head of and draw a second time with its tail at the head of . If the common point is the origin, you get a picture like the figure below.     Any parallelogram can be constructed like this if you pick the common point and two vectors appropriately. Let's compute the area of the parallelogram. The area of the large rectangle with vertices and is . The parallelogram we want can be extracted from the large rectangle by deleting the two small rectangles (each of area ), and the two lightly shaded triangles (each of area ), and the two darkly shaded triangles (each of area ). So the desired In the above figure, we have implicitly assumed that and . In words, we have assumed that both vectors lie in the first quadrant and that lies above . By simply interchanging and in the picture and throughout the argument, we see that when and , so that the vector lies below , the area of the parallelogram is . In fact, all cases are covered by the formula       Given two vectors and , the expression is generally written and is called the determinant of the matrix The topics of matrices and determinants appear prominently in linear algebra courses. We are only going to use them as notation, and we will explicitly explain that notation. A linear algebra course is not a prerequisite for this text.  with rows and . The determinant of a matrix is the product of the diagonal entries minus the product of the off-diagonal entries.  There is a similar formula in three dimensions. Any three vectors and in three dimensions     determine a parallelepiped (three dimensional parallelogram). Its volume is given by the formula       The determinant of a matrix can be defined in terms of some determinants by     This formula is called expansion along the top row . There is one term in the formula for each entry in the top row of the matrix. The term is a sign times the entry itself times the determinant of the matrix gotten by deleting the row and column that contains the entry. The sign alternates, starting with a .  We shall not prove this formula completely here For a full derivation, see Example . It gets a little tedious. But, there is one case in which we can easily verify that the volume of the parallelepiped is really given by the absolute value of the claimed determinant. If the vectors and happen to lie in the plane, so that , then The first factor, , is the -coordinate of the one vector not contained in the -plane. It is (up to a sign) the height of the parallelepiped. The second factor is, up to a sign, the area of the parallelogram determined by and . This parallelogram forms the base of the parallelepiped. The product is indeed, up to a sign, the volume of the parallelepiped. That the formula is true in general is a consequence of the fact (that we will not prove) that the value of a determinant does not change when one rotates the coordinate system and that one can always rotate our coordinate axes around so that and both lie in the -plane.    The Cross Product  We have already seen two different products involving vectors the multiplication of a vector by a scalar and the dot product of two vectors. The dot product of two vectors yields a scalar. We now introduce another product of two vectors, called the cross product . The cross product of two vectors will give a vector. There are applications which have two vectors as inputs and produce one vector as an output, and which are related to the cross product. Here is a very brief mention of two such applications. We will look at them in much more detail later.   Consider a parallelogram in three dimensions. A parallelogram is naturally determined by the two vectors that define its sides. One measure of the size of a parallelogram is its area. One way to specify the orientation of the parallelogram is to give a vector that is perpendicular to it. A very compact way to encode both the area and the orientation of the parallelogram is to give a vector whose direction is perpendicular to the plane in which it lies and whose magnitude is its area. We shall see that such a vector can be easily constructed by taking the cross product (definition coming shortly) of the two vectors that give the sides of the parallelogram.       Imagine a rigid body which is rotating at a rate radians per second about an axis whose direction is given by the unit vector . Let be any point on the body. We shall see, in the (optional) § , that the velocity, , of the point is the cross product (again, definition coming shortly) of the vector with the vector from any point on the axis of rotation to .        Finally, here is the definition of the cross product. Note that it applies only to vectors in three dimensions.  Cross Product  The cross product of the vectors and is denoted and is defined by    Note that each component has the form . The index of the first in component number of is just after in the list . The index of the first is just before in the list. For example, for component number ,   There is a much better way to remember this definition. Recall that a matrix is an array of numbers having two rows and two columns and that the determinant of a matrix is defined by It is the product of the entries on the diagonal minus the product of the entries not on the diagonal.  A matrix is an array of numbers having three rows and three columns. You will shortly see why the entries in the top row have been given the rather peculiar names , and . The determinant of a matrix can be defined in terms of some determinants by     This formula is called expansion of the determinant along the top row . There is one term in the formula for each entry in the top row. The term is a sign times the entry itself times the determinant of the matrix gotten by deleting the row and column that contains the entry. The sign alternates, starting with a . If we now replace by , by and by , we get exactly the formula for of Definition . That is the reason for the peculiar choice of names for the matrix entries. So is a mnemonic device for remembering the definition of . It is also good from the point of view of evaluating . Here are several examples in which we use the determinant mnemonic device to evaluate cross products.   In this example, we'll use the mnemonic device to compute two very simple cross products. First     Second     Note that, unlike most (or maybe even all) products that you have seen before, is not the same as !    In this example, we'll use the mnemonic device to compute two more complicated cross products. Let and . First     Second     Here are some important observations.  The vectors and are not the same! In fact . We shall see in Theorem below that this was not a fluke. The vector has dot product zero with both and . So the vector is prependicular to both and . We shall see in Theorem below that this was also not a fluke.      Yet again we use the mnemonic device to compute a more complicated cross product. This time let and . Then     We shall see in Theorem below that it is not a fluke that the cross product is . It is a consequence of the fact that and are parallel.   We now move on to learning about the properties of the cross product. Our first properties lead up to a more intuitive geometric definition of , which is better for interpreting . These properties of the cross product, which state that is a vector and then determine its direction and length, are as follows. We will collect these properties, and a few others, into a theorem shortly.   (0)   are vectors in three dimensions and is a vector in three dimensions.   (1)   is perpendicular to both and .      To check that and are perpendicular, one just has to check that the dot product . The six terms in cancel pairwise. The computation showing that is similar.     (2)            The formula is gotten by verifying that To see that is the area of the parallelogram with sides and , just recall that the area of any parallelogram is given by the length of its base times its height. Think of as the base of the parallelogram. Then is the length of the base and is the height.      These properties almost determine . Property 1 forces the vector to lie on the line perpendicular to the plane containing and . There are precisely two vectors on this line that have the length given by property 2. In the left hand figure of       the two vectors are labeled and . Which of these two candidates is correct is determined by the right hand rule That the cross product uses the right hand rule, rather than the left hand rule, is an example of the tyranny of the masses only roughly 10\\% of humans are left-handed. , which says that if you form your right hand into a fist with your fingers curling from to , then when you stick your thumb straight out from the fist, it points in the direction of . This is illustrated in the figure on the right above This figure is a variant of  . The important special cases  (3)    all follow directly from the definition of the cross product (see, for example, Example ) and all obey the right hand rule. Combining properties 1, 2 and the right hand rule give the geometric definition of . To remember these three special cases, just remember this figure.     The product of any two standard basis vectors, taken in the order of the arrows in the figure, is the third standard basis vector. Going against the arrows introduces a minus sign.   (4)   where is the angle between , , and obey the right hand rule.     Outline of Proof  We have already seen that the right hand side has the correct length and, except possibly for a sign, direction. To check that the right hand rule holds in general, rotate your coordinate system around Note that as you translate or rotate the coordinate system, the right hand rule is preserved. If obey the right hand rule so do their rotated and translated versions. so that points along the positive axis and lies in the -plane with positive component. That is and with . Then The first term vanishes by property 2, because the angle between and is zero. So, by property 3, points along the positive axis, which is consistent with the right hand rule.   The analog of property 7 of the dot product (which says that is zero if and only if or or ) follows immediately from property 2.  (5)        The remaining properties are all tools for helping do computations with cross products. Here is a theorem which summarizes the properties of the cross product. We have already seen the first five. The other properties are all tools for helping do computations with cross products.  Properties of the Cross Product    (0)   are vectors in three dimensions and is a vector in three dimensions.   (1)   is perpendicular to both and .   (2)         (3)      (4)   where is the angle between , , and obey the right hand rule.   (5)      (6)     (7)   for any scalar (i.e. number) .   (8)     (9)      (10)           We have already seen the proofs up to number 5. Numbers 6, 7 and 8 follow immediately from the definition, using a little algebra. To prove numbers 9 and 10 we just write out the definitions of the left hand sides and the right hand sides and observe that they are equal.    (9)  The left hand side is The right hand side is The left and right hand sides are the same.   (10)  We will give the straightforward, but slightly tedious, computations in (the optional) § .       Take particular care with properties 6 and 10. They are counterintuitive and are a frequent source of errors. In particular, for general vectors , , , the cross product is neither commutative nor associative, meaning that For example     As an illustration of the properties of the dot and cross product, we now derive the formula for the volume of the parallelepiped with edges , , that was mentioned in § .     The volume of the parallelepiped is the area of its base times its height This is a simple integral calculus exercise. . The base is the parallelogram with sides and . Its area is the length of its base, which is , times its height, which is . (Drop a perpendicular from the head of to the line containing ). Here is the angle between and . So the area of the base is , by property 2 of the cross product.  To get the height of the parallelepiped, we drop a perpendicular from the head of to the line that passes through the tail of and is perpendicular to the base of the parallelepiped. In other words, from the head of to the line that contains both the head and the tail of . So the height of the parallelepiped is . (The absolute values have been included because if the angle between and happens to be greater than , the produced by taking the dot product of and ) will be negative.)  All together     As a concrete example of the computation of the volume of a parallelepiped, we consider the parallelepiped with edges Here is a sketch.     The base of the parallelepiped is the parallelogram with sides and . It is the shaded parallelogram in the sketch above. As We should not be surprised that has direction .   has to be perpendicular to both and and  both and lie in the -plane,  so that has to the perpendicular to the -plane,  so that has to the parallel to the -axis.  The area of the base, i.e. of the shaded parallelogram in the figure above, is and the volume of the parallelepiped is      (Optional) Some Vector Identities  Here are a few identities involving dot and cross products.                 Proof of (a)  We proved this in Theorem , by evaluating the left and right hand sides, and observing that they are the same. Here is a second proof, in which we again write out both sides, but this time we express them in terms of determinants. Exchanging two rows in a determinant changes the sign of the determinant. Moving the top row of a determinant to the bottom row requires two exchanges of rows. So the two determinants are equal.   Proof of (b)  The proof is not exceptionally difficult just write out both sides and grind. Substituting in gives, for the left hand side, On the other hand, the right hand side The last formula that we had for the left hand side is the same as the last formula we had for the right hand side. Oof! This is a little tedious to do by hand. But any computer algebra system will do it for you in a flash.   Proof of (c)  We just apply part (b) three times      (Optional) Application of Cross Products to Rotational Motion  In most computations involving rotational motion, the cross product shows up in one form or another. This is one of the main applications of the cross product. Consider, for example, a rigid body which is rotating at a constant rate of radians per second about an axis whose direction is given by the unit vector . Let be any point on the body. Let's figure out its velocity. Pick any point on the axis of rotation and designate it as the origin of our coordinate system. Denote by the vector from the origin to the point . Let denote the angle between and . As time progresses the point sweeps out a circle of radius .     In one second travels along an arc that subtends an angle of radians, which is the fraction of a full circle. The length of this arc is so travels the distance in one second and its speed, which is also the length of its velocity vector, is .  Now we just need to figure out the direction of the velocity vector. That is, the direction of motion of the point . Imagine that both and lie in the plane of a piece of paper, as in the figure above. Then points either straight into or straight out of the page and consequently is perpendicular to both and . To distinguish between the into the page and out of the page cases, let's impose the conventions that and the axis of rotation is chosen to obey the right hand rule, meaning that if the thumb of your right hand is pointing in the direction , then your fingers are pointing in the direction of motion of the rigid body. Under these conventions, the velocity vector obeys         obey the right hand rule  That is, is exactly . It is conventional to define the angular velocity of a rigid body to be vector . That is, the vector with length given by the rate of rotation and direction given by the axis of rotation of the rigid body. In particular, the bigger the rate of rotation, the longer the angular velocity vector. In terms of this angular velocity vector, the velocity of the point is     (Optional) Application of Cross Products to Rotating Reference Frames  Imagine a moving particle that is being tracked by two observers.  One observer is fixed (out in space) and measures the position of the particle to be .  The other observer is tied to a merry-go-round (the Earth) and measures the position of the particle to be .  The merry-go-round is sketched in the figure on the left below. It is rotating about the -axis at a (constant) rate of radians per second. The vector , whose length is the rate of rotation and whose direction is the axis of rotation, is called the angular velocity.      The - and -axes of the moving observer are painted in red on the merry-go-round. The figure on the right above shows a top view of the merry-go-round. The - and -axes of the moving observer are again red. The - and -axes of the fixed observer are blue. We are assuming that at time , the -axis of the moving observer and the -axis of the fixed observer coincide. As the merry-go-round is rotating at radians per second, the angle between the -axis and -axis after seconds is .  As an example, suppose that the moving particle is tied to the tip of the moving observer's unit vector. Then or, if we write and , then   In general, denote by the coordinates of the unit -vector of the moving observer at time , as measured by the fixed observer. Similarly for the unit -vector, and for the unit -vector. As the merry-go-round is rotating about the -axis at a rate of radians per second, the angle between the -axis and -axis after seconds is , and      The position of the moving particle, as seen by the fixed observer is Differentiating, the velocity of the moving particle, as measured by the fixed observer is We saw, in the last (optional) § , that (You could also verify that these are correct by putting in and explicitly computing the cross products.) So Differentiating a second time, the acceleration of the moving particle (which is also , where is the net force being applied to the particle and is the mass of the particle) as measured by the fixed observer is   Recall that the angular velocity does not depend on time. The rotating observer sees as , sees as , and sees as and so sees where, as usual, So the acceleration of the particle seen by the moving observer is Here   is the sum of all external forces acting on the moving particle,   is called the Coriolis force and   is called the centrifugal force.  As an example, suppose that you are the moving particle and that you are at the edge of the merry-go-round. Let's say and you are at . Then is the friction that the surface of the merry-go-round applies to the soles of your shoes. If you are just standing there, , so that , and the friction exactly cancels the centrifugal force so that you remain at . Assume that . Now suppose that you start walking around the edge of the merry-go-round. Then, at , and  if you walk in the direction of rotation (with speed one), as in the figure on the left below, and the Coriolis force tries to push you off of the merry-go-round, while  if you walk opposite to the direction of rotation (with speed one), as in the figure on the right below, so that the Coriolis force tries to pull you into the centre of the merry-go-round.        On a rotating ball, such as the Earth, the Coriolis force deflects wind to the right (counterclockwise) in the northern hemisphere and to the left (clockwise) is the southern hemisphere. In particular, hurricanes\/cyclones\/typhoons rotate counterclockwise in the northern hemisphere and clockwise in the southern hemisphere. On the other hand, when it comes to water draining out of, for example, a toilet, Coriolis force effects are dominated by other factors like asymmetry of the toilet.    "
},
{
  "id": "not_scalar_vector",
  "level": "2",
  "url": "sec_vectors.html#not_scalar_vector",
  "type": "Definition",
  "number": "3.4",
  "title": "",
  "body": "  we use  bold faced letters, like , , , to designate vectors, and  angle brackets, like , around the components of a vector, but use  round brackets, like , around the coordinates of a point, and use   scalar to emphasise that some quantity is a number, rather than a vector.    "
},
{
  "id": "def_addScalMult",
  "level": "2",
  "url": "sec_vectors.html#def_addScalMult",
  "type": "Definition",
  "number": "3.5",
  "title": "Adding Vectors and Multiplying a Vector by a Number.",
  "body": " Adding Vectors and Multiplying a Vector by a Number   These two operations have the obvious definitions and similarly in three dimensions.  "
},
{
  "id": "thm_addScalMult",
  "level": "2",
  "url": "sec_vectors.html#thm_addScalMult",
  "type": "Theorem",
  "number": "3.6",
  "title": "Properties of Addition and Scalar Multiplication.",
  "body": " Properties of Addition and Scalar Multiplication  Let , and be vectors and and be scalars. Then   "
},
{
  "id": "example-8",
  "level": "2",
  "url": "sec_vectors.html#example-8",
  "type": "Example",
  "number": "3.7",
  "title": "",
  "body": " For example, if then and   "
},
{
  "id": "def_parallel_vectors",
  "level": "2",
  "url": "sec_vectors.html#def_parallel_vectors",
  "type": "Definition",
  "number": "3.8",
  "title": "",
  "body": "  Two vectors and   are said to be parallel if for some nonzero real number and  are said to have the same direction if for some number .    "
},
{
  "id": "def_basis_vectors",
  "level": "2",
  "url": "sec_vectors.html#def_basis_vectors",
  "type": "Definition",
  "number": "3.9",
  "title": "",
  "body": "  The standard basis vectors in two dimensions are      The standard basis vectors in three dimensions are       "
},
{
  "id": "def_vectLen",
  "level": "2",
  "url": "sec_vectors.html#def_vectLen",
  "type": "Definition",
  "number": "3.10",
  "title": "Length of a Vector.",
  "body": "Length of a Vector   A unit vector is a vector of length one. We'll sometimes use the accent to emphasise that the vector is a unit vector. That is, .  "
},
{
  "id": "eg_unit_vector",
  "level": "2",
  "url": "sec_vectors.html#eg_unit_vector",
  "type": "Example",
  "number": "3.11",
  "title": "",
  "body": " Recall that multiplying a vector by a positive number , changes the length of the vector by a factor without changing the direction of the vector. So (assuming that  is a unit vector that has the same direction as . For example, is a unit vector that points in the same direction as .  "
},
{
  "id": "eg_walk",
  "level": "2",
  "url": "sec_vectors.html#eg_walk",
  "type": "Example",
  "number": "3.12",
  "title": "",
  "body": " We go for a walk on a flat Earth. We use a coordinate system with the positive x-axis pointing due east and the positive y-axis pointing due north. We  start at the origin and  walk due east for 4 units and then  walk northeast for units and then  head towards the point , but we only go  one third of the way.        We will now use vectors to figure out our final location.  On the first leg of our walk, we go 4 units in the positive -direction. So our displacement vector the vector whose tail is at our starting point and whose head is at the end point of the first leg is . As we started at we finish the first leg of the walk at .  On the second leg of our walk, our direction of motion is northeast, i.e. is above the direction of the positive -axis. Looking at the figure on the right above, we see that our displacement vector, for the second leg of the walk, has to be in the same direction as the vector . So our displacement vector is the vector of length with the same direction as . The vector has length and so has length one and our displacement vector is If we draw this displacement vector, with its tail at , the starting point of the second leg of the walk, then its head will be at and that is the end point of the second leg of the walk.  On the final leg of our walk, we start at and walk towards . The vector from to is . As we go only one third of the way, our final displacement vector is If we draw this displacement vector with its tail at , the starting point of the final leg, then its head will be at and that is the end point of the final leg of the walk, and our final location.    "
},
{
  "id": "def_dotProd",
  "level": "2",
  "url": "sec_vectors.html#def_dotProd",
  "type": "Definition",
  "number": "3.13",
  "title": "Dot Product.",
  "body": " Dot Product  The dot product of the vectors and is denoted and is defined by in two and three dimensions respectively.  "
},
{
  "id": "thm_dotPppties",
  "level": "2",
  "url": "sec_vectors.html#thm_dotPppties",
  "type": "Theorem",
  "number": "3.14",
  "title": "Properties of the Dot Product.",
  "body": " Properties of the Dot Product   Let , and be vectors and let be a scalar. Then    "
},
{
  "id": "proof-1",
  "level": "2",
  "url": "sec_vectors.html#proof-1",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Properties 0 through 5 are almost immediate consequences of the definition. For example, for property 3 (which is called the distributive law) in dimension 2,   Property 6 is sufficiently important that it is often used as the definition of dot product. It is not at all an obvious consequence of the definition. To verify it, we just write in two different ways. The first expresses in terms of . It is Here, , for example, means that the equality is a consequence of property 1. The second way we write involves and follows from the cosine law for triangles. Just in case you don't remember the cosine law, we'll derive it right now! Start by applying Pythagoras to the shaded triangle in the right hand figure of     That triangle is a right triangle whose hypotenuse has length and whose other two sides have lengths and . So Pythagoras gives This is precisely the cosine law You may be used to seeing it written as , where , and are the lengths of the three sides of the triangle and is the angle opposite the side of length  . Observe that, when , this reduces to, (surprise!) Pythagoras' theorem.  Setting our two expressions for equal to each other, cancelling the and common to both sides and dividing by gives which is exactly property 6.  Property 7 follows directly from property 6. First note that the dot product is zero if and only if at least one of the three factors is zero. The first factor is zero if and only if . The second factor is zero if and only if . The third factor is zero if and only if , for some integer , which in turn is true if and only if and are mutually perpendicular.  "
},
{
  "id": "example-11",
  "level": "2",
  "url": "sec_vectors.html#example-11",
  "type": "Example",
  "number": "3.15",
  "title": "",
  "body": " Consider the three vectors Their dot products tell us that is perpendicular to both and . Since both the first dot product tells us that the angle, , between and obeys      "
},
{
  "id": "def_projection",
  "level": "2",
  "url": "sec_vectors.html#def_projection",
  "type": "Definition",
  "number": "3.16",
  "title": "Projection.",
  "body": " Projection  Draw two vectors, and , with their tails at a common point and drop a perpendicular from the head of to the line that passes through both the head and tail of . By definition, the projection of the vector on the vector is the vector from the tail of to the point on the line where the perpendicular hits.       "
},
{
  "id": "eqn_proj",
  "level": "2",
  "url": "sec_vectors.html#eqn_proj",
  "type": "Fact",
  "number": "3.17",
  "title": "",
  "body": "    "
},
{
  "id": "eqn_unit_proj",
  "level": "2",
  "url": "sec_vectors.html#eqn_unit_proj",
  "type": "Fact",
  "number": "3.18",
  "title": "",
  "body": "    "
},
{
  "id": "eg_proj",
  "level": "2",
  "url": "sec_vectors.html#eg_proj",
  "type": "Example",
  "number": "3.19",
  "title": "",
  "body": " In this example, we will find the projection of the vector on the vector , as in the figure     By Equation with and , that projection is   "
},
{
  "id": "eq_pgram_area",
  "level": "2",
  "url": "sec_vectors.html#eq_pgram_area",
  "type": "Fact",
  "number": "3.20",
  "title": "",
  "body": "    "
},
{
  "id": "eq_piped_volume",
  "level": "2",
  "url": "sec_vectors.html#eq_piped_volume",
  "type": "Fact",
  "number": "3.21",
  "title": "",
  "body": "    "
},
{
  "id": "def_crossProd",
  "level": "2",
  "url": "sec_vectors.html#def_crossProd",
  "type": "Definition",
  "number": "3.22",
  "title": "Cross Product.",
  "body": "Cross Product  The cross product of the vectors and is denoted and is defined by   "
},
{
  "id": "eg_GEOcrossijji",
  "level": "2",
  "url": "sec_vectors.html#eg_GEOcrossijji",
  "type": "Example",
  "number": "3.23",
  "title": "",
  "body": " In this example, we'll use the mnemonic device to compute two very simple cross products. First     Second     Note that, unlike most (or maybe even all) products that you have seen before, is not the same as !  "
},
{
  "id": "eg_GEOcrossEgA",
  "level": "2",
  "url": "sec_vectors.html#eg_GEOcrossEgA",
  "type": "Example",
  "number": "3.24",
  "title": "",
  "body": " In this example, we'll use the mnemonic device to compute two more complicated cross products. Let and . First     Second     Here are some important observations.  The vectors and are not the same! In fact . We shall see in Theorem below that this was not a fluke. The vector has dot product zero with both and . So the vector is prependicular to both and . We shall see in Theorem below that this was also not a fluke.    "
},
{
  "id": "eg_GEOcrossEgB",
  "level": "2",
  "url": "sec_vectors.html#eg_GEOcrossEgB",
  "type": "Example",
  "number": "3.25",
  "title": "",
  "body": " Yet again we use the mnemonic device to compute a more complicated cross product. This time let and . Then     We shall see in Theorem below that it is not a fluke that the cross product is . It is a consequence of the fact that and are parallel.  "
},
{
  "id": "proof-2",
  "level": "2",
  "url": "sec_vectors.html#proof-2",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " To check that and are perpendicular, one just has to check that the dot product . The six terms in cancel pairwise. The computation showing that is similar.  "
},
{
  "id": "proof-3",
  "level": "2",
  "url": "sec_vectors.html#proof-3",
  "type": "Proof",
  "number": "2",
  "title": "",
  "body": " The formula is gotten by verifying that To see that is the area of the parallelogram with sides and , just recall that the area of any parallelogram is given by the length of its base times its height. Think of as the base of the parallelogram. Then is the length of the base and is the height.     "
},
{
  "id": "proof-4",
  "level": "2",
  "url": "sec_vectors.html#proof-4",
  "type": "Proof",
  "number": "3",
  "title": "Outline of Proof.",
  "body": "Outline of Proof  We have already seen that the right hand side has the correct length and, except possibly for a sign, direction. To check that the right hand rule holds in general, rotate your coordinate system around Note that as you translate or rotate the coordinate system, the right hand rule is preserved. If obey the right hand rule so do their rotated and translated versions. so that points along the positive axis and lies in the -plane with positive component. That is and with . Then The first term vanishes by property 2, because the angle between and is zero. So, by property 3, points along the positive axis, which is consistent with the right hand rule.  "
},
{
  "id": "thm_crossPppties",
  "level": "2",
  "url": "sec_vectors.html#thm_crossPppties",
  "type": "Theorem",
  "number": "3.26",
  "title": "Properties of the Cross Product.",
  "body": "Properties of the Cross Product    (0)   are vectors in three dimensions and is a vector in three dimensions.   (1)   is perpendicular to both and .   (2)         (3)      (4)   where is the angle between , , and obey the right hand rule.   (5)      (6)     (7)   for any scalar (i.e. number) .   (8)     (9)      (10)         "
},
{
  "id": "proof-5",
  "level": "2",
  "url": "sec_vectors.html#proof-5",
  "type": "Proof",
  "number": "4",
  "title": "",
  "body": " We have already seen the proofs up to number 5. Numbers 6, 7 and 8 follow immediately from the definition, using a little algebra. To prove numbers 9 and 10 we just write out the definitions of the left hand sides and the right hand sides and observe that they are equal.    (9)  The left hand side is The right hand side is The left and right hand sides are the same.   (10)  We will give the straightforward, but slightly tedious, computations in (the optional) § .     "
},
{
  "id": "warning_GEOMcross",
  "level": "2",
  "url": "sec_vectors.html#warning_GEOMcross",
  "type": "Warning",
  "number": "3.27",
  "title": "",
  "body": " Take particular care with properties 6 and 10. They are counterintuitive and are a frequent source of errors. In particular, for general vectors , , , the cross product is neither commutative nor associative, meaning that For example   "
},
{
  "id": "eg_GEOcross",
  "level": "2",
  "url": "sec_vectors.html#eg_GEOcross",
  "type": "Example",
  "number": "3.28",
  "title": "",
  "body": " As an illustration of the properties of the dot and cross product, we now derive the formula for the volume of the parallelepiped with edges , , that was mentioned in § .     The volume of the parallelepiped is the area of its base times its height This is a simple integral calculus exercise. . The base is the parallelogram with sides and . Its area is the length of its base, which is , times its height, which is . (Drop a perpendicular from the head of to the line containing ). Here is the angle between and . So the area of the base is , by property 2 of the cross product.  To get the height of the parallelepiped, we drop a perpendicular from the head of to the line that passes through the tail of and is perpendicular to the base of the parallelepiped. In other words, from the head of to the line that contains both the head and the tail of . So the height of the parallelepiped is . (The absolute values have been included because if the angle between and happens to be greater than , the produced by taking the dot product of and ) will be negative.)  All together   "
},
{
  "id": "eg_GEOcrossConcrete",
  "level": "2",
  "url": "sec_vectors.html#eg_GEOcrossConcrete",
  "type": "Example",
  "number": "3.29",
  "title": "",
  "body": " As a concrete example of the computation of the volume of a parallelepiped, we consider the parallelepiped with edges Here is a sketch.     The base of the parallelepiped is the parallelogram with sides and . It is the shaded parallelogram in the sketch above. As We should not be surprised that has direction .   has to be perpendicular to both and and  both and lie in the -plane,  so that has to the perpendicular to the -plane,  so that has to the parallel to the -axis.  The area of the base, i.e. of the shaded parallelogram in the figure above, is and the volume of the parallelepiped is   "
},
{
  "id": "lem_tripProd",
  "level": "2",
  "url": "sec_vectors.html#lem_tripProd",
  "type": "Lemma",
  "number": "3.30",
  "title": "",
  "body": "              "
},
{
  "id": "proof-6",
  "level": "2",
  "url": "sec_vectors.html#proof-6",
  "type": "Proof",
  "number": "1",
  "title": "Proof of (a).",
  "body": "Proof of (a)  We proved this in Theorem , by evaluating the left and right hand sides, and observing that they are the same. Here is a second proof, in which we again write out both sides, but this time we express them in terms of determinants. Exchanging two rows in a determinant changes the sign of the determinant. Moving the top row of a determinant to the bottom row requires two exchanges of rows. So the two determinants are equal.  "
},
{
  "id": "proof-7",
  "level": "2",
  "url": "sec_vectors.html#proof-7",
  "type": "Proof",
  "number": "2",
  "title": "Proof of (b).",
  "body": "Proof of (b)  The proof is not exceptionally difficult just write out both sides and grind. Substituting in gives, for the left hand side, On the other hand, the right hand side The last formula that we had for the left hand side is the same as the last formula we had for the right hand side. Oof! This is a little tedious to do by hand. But any computer algebra system will do it for you in a flash.  "
},
{
  "id": "proof-8",
  "level": "2",
  "url": "sec_vectors.html#proof-8",
  "type": "Proof",
  "number": "3",
  "title": "Proof of (c).",
  "body": "Proof of (c)  We just apply part (b) three times   "
},
{
  "id": "sec_lines_2d",
  "level": "1",
  "url": "sec_lines_2d.html",
  "type": "Section",
  "number": "3.3",
  "title": "Equations of Lines in 2d",
  "body": " Equations of Lines in 2d  A line in two dimensions can be specified by giving one point on the line and one vector whose direction is parallel to the line.     If is any point on the line then the vector , whose tail is at and whose head is at , must be parallel to and hence must be a scalar multiple of . So   Parametric Equations    or, writing out in components,     These are called the parametric equations of the line, because they contain a free parameter, namely . As varies from to , the point traverses the entire line.  It is easy to eliminate the parameter from the equations. Just multiply by , multiply by and subtract to give In the event that and are both nonzero, we can rewrite this as  Symmetric Equation      This is called the symmetric equation for the line.  A second way to specify a line in two dimensions is to give one point on the line and one vector whose direction is perpendicular to that of the line.     If is any point on the line then the vector , whose tail is at and whose head is at , must be perpendicular to so that     Writing out in components     Observe that the coefficients of and in the equation of the line are the components of a vector perpendicular to the line. This enables us to read off a vector perpendicular to any given line directly from the equation of the line. Such a vector is called a normal vector for the line.   Consider, for example, the line . To rewrite this equation in the form we have to move terms around so that and are on one side of the equation and is on the other side: . Then is the coefficient of , namely , and is the coefficient of , namely . One normal vector for is .  Of course, if is perpendicular to , so is . In fact, if we first multiply the equation by to get and then set and to the coefficients of and respectively, we get .    In this example, we find the point on the line (call the line ) that is closest to the point .  We'll start by sketching the line. To do so, we guess two points on and then draw the line that passes through the two points.  If is on and , then . So is on .  If is on and , then . So is on .        Denote by the point on that is closest to . It is characterized by the property that the line from to is perpendicular to . This is the case just because if is any other point on , then, by Pythagoras, the distance from to is larger than the distance from to . See the figure on the right above.  Let's use to denote the line which passes through and which is perpendicular to .     Since has the equation , one vector perpendicular to , and hence parallel to , is . So if is any point on , the vector must be of the form . So the parametric equations of are Now let be the coordinates of . Since is on , we have , for some . Since is also on , we also have . So and is .    "
},
{
  "id": "eqn_par_line",
  "level": "2",
  "url": "sec_lines_2d.html#eqn_par_line",
  "type": "Fact",
  "number": "3.31",
  "title": "Parametric Equations.",
  "body": " Parametric Equations    or, writing out in components,    "
},
{
  "id": "eqn_symm_eqn_line",
  "level": "2",
  "url": "sec_lines_2d.html#eqn_symm_eqn_line",
  "type": "Fact",
  "number": "3.32",
  "title": "Symmetric Equation.",
  "body": "Symmetric Equation     "
},
{
  "id": "eqn_line",
  "level": "2",
  "url": "sec_lines_2d.html#eqn_line",
  "type": "Fact",
  "number": "3.33",
  "title": "",
  "body": "   Writing out in components    "
},
{
  "id": "example-18",
  "level": "2",
  "url": "sec_lines_2d.html#example-18",
  "type": "Example",
  "number": "3.34",
  "title": "",
  "body": " Consider, for example, the line . To rewrite this equation in the form we have to move terms around so that and are on one side of the equation and is on the other side: . Then is the coefficient of , namely , and is the coefficient of , namely . One normal vector for is .  Of course, if is perpendicular to , so is . In fact, if we first multiply the equation by to get and then set and to the coefficients of and respectively, we get .  "
},
{
  "id": "eg_nearest_point",
  "level": "2",
  "url": "sec_lines_2d.html#eg_nearest_point",
  "type": "Example",
  "number": "3.35",
  "title": "",
  "body": " In this example, we find the point on the line (call the line ) that is closest to the point .  We'll start by sketching the line. To do so, we guess two points on and then draw the line that passes through the two points.  If is on and , then . So is on .  If is on and , then . So is on .        Denote by the point on that is closest to . It is characterized by the property that the line from to is perpendicular to . This is the case just because if is any other point on , then, by Pythagoras, the distance from to is larger than the distance from to . See the figure on the right above.  Let's use to denote the line which passes through and which is perpendicular to .     Since has the equation , one vector perpendicular to , and hence parallel to , is . So if is any point on , the vector must be of the form . So the parametric equations of are Now let be the coordinates of . Since is on , we have , for some . Since is also on , we also have . So and is .  "
},
{
  "id": "sec_planes_3d",
  "level": "1",
  "url": "sec_planes_3d.html",
  "type": "Section",
  "number": "3.4",
  "title": "Equations of Planes in 3d",
  "body": " Equations of Planes in 3d  Specifying one point on a plane and a vector parallel to the plane does not uniquely determine the plane, because it is free to rotate about . On the other hand, giving one point      on the plane and one vector with direction perpendicular to that of the plane does uniquely determine the plane. If is any point on the plane then the vector , whose tail is at and whose head is at , lies entirely inside the plane and so must be perpendicular to . That is,   The Equation of a Plane   Writing out in components where .   Again, the coefficients of and in the equation of the plane are the components of a vector perpendicular to the plane. The vector is often called a normal vector for the plane. Any nonzero multiple of will also be perpendicular to the plane and is also called a normal vector.   We have just seen that if we write the equation of a plane in the standard form then it is easy to read off a normal vector for the plane. It is just . So for example the planes have normal vectors and , respectively. Since , the two normal vectors and are parallel to each other. This tells us that the planes and are parallel to each other.  When the normal vectors of two planes are perpendicular to each other, we say that the planes are perpendicular to each other. For example the planes have normal vectors and , respectively. Since the normal vectors and are mutually perpendicular, so the corresponding planes and are perpendicular to each other.   Here is an example that illustrates how one can sketch a plane, given the equation of the plane.   In this example, we'll sketch the plane A good way to prepare for sketching a plane is to find the intersection points of the plane with the -, - and -axes, just as you are used to doing when sketching lines in the -plane. For example, any point on the axis must be of the form . For to also be on we need . So intersects the -axis at . Similarly, intersects the -axis at and the -axis at . Now plot the points , and . is the plane containing these three points. Often a visually effective way to sketch a surface in three dimensions is to  only sketch the part of the surface in the first octant. That is, the part with , and .  To do so, sketch the curve of intersection of the surface with the part of the -plane in the first octant and,  similarly, sketch the curve of intersection of the surface with the part of the -plane in the first octant and the curve of intersection of the surface with the part of the -plane in the first octant.  That's what we'll do. The intersection of the plane with the -plane is the straight line through the two points and . So the part of that intersection in the first octant is the line segment from to . Similarly the part of the intersection of with the -plane that is in the first octant is the line segment from to and the part of the intersection of with the -plane that is in the first octant is the line segment from to . So we just have to sketch the three line segments joining the three axis intercepts , and . That's it.      Here are two examples that illustrate how one can find the distance between a point and a plane.   In this example, we'll compute the distance between the point By the distance between and the plane we mean the shortest distance between and any point on . In fact, we'll evaluate the distance in two different ways. In the next Example , we'll use projection. In this example, our strategy for finding the distance will be to  first observe that the vector is normal to and then  start walking To see why heading in the normal direction gives the shortest walk, revisit Example . away from in the direction of the normal vector and  keep walking until we hit . Call the point on where we hit, . Then the desired distance is the distance between and . From the figure below it does indeed look like distance between and is the shortest distance between and any point on . This is in fact true, though we won't prove it.       So imagine that we start walking, and that we start at time at and walk in the direction . Then at time we might be at We hit the plane at exactly the time for which satisfies the equation for , which is . So we are on at the unique time obeying So the point on which is closest to is and the distance from to is the distance from to , which is      Example , revisited  We are again going to find the distance from the point But this time we will use the following strategy.  We'll first find any point on and then  we'll denote by the point on nearest , and we'll denote by the vector from to (see the figure below) and then  we'll realize, by looking at the figure, that the vector from to is exactly the projection Now might be a good time to review the Definition of projection. of the vector on so that  the distance from to , i.e. the length of the vector from to , is exactly .       Now let's find a point on . The plane is given by a single equation, namely in the three unknowns, , , . The easiest way to find one solution to this equation is to assign two of the unknowns the value zero and then solve for the third unknown. For example, if we set , then the equation reduces to . So we may take .  Then , the vector from to is so that, by Equation , and the distance from to is just as we found in Example .   In the next example, we find the distance between two planes.   Now we'll increase the degree of difficulty a tiny bit, and compute the distance between the planes By the distance between the planes and we mean the shortest distance between any pair of points and with in and in . First observe that the normal vectors to and are parallel to each other. So the planes and are parallel to each other. If they had not been parallel, they would have crossed and the distance between them would have been zero.  Our strategy for finding the distance will be to  first find a point on and then, like we did in Example ,  start walking away from in the direction of the normal vector and  keep walking until we hit . Call the point on that we hit . Then the desired distance is the distance between and . From the figure below it does indeed look like distance between and is the shortest distance between any pair of points with one point on and one point on . Again, this is in fact true, though we won't prove it.       We can find a point on just as we did on Example . The plane is given by the single equation in the three unknowns, , , . We can find one solution to this equation by assigning two of the unknowns the value zero and then solving for the third unknown. For example, if we set , then the equation reduces to . So we may take .  Now imagine that we start walking, and that we start at time at and walk in the direction . Then at time we might be at We hit the second plane at exactly the time for which satisfies the equation for , which is . So we are on at the unique time obeying So the point on which is closest to is and the distance from to is the distance from to which is    Now we'll find the angle between two intersecting planes.   The orientation (i.e. direction) of a plane is determined by its normal vector. So, by definition, the angle between two planes is the angle between their normal vectors. For example, the normal vectors of the two planes are If we use to denote the angle between and , then so that to four decimal places. That's in radians. In degrees, it is to two decimal places.    "
},
{
  "id": "eqn_of_plane",
  "level": "2",
  "url": "sec_planes_3d.html#eqn_of_plane",
  "type": "Fact",
  "number": "3.36",
  "title": "The Equation of a Plane.",
  "body": " The Equation of a Plane   Writing out in components where .  "
},
{
  "id": "eg_VPparallel-normal-Planes",
  "level": "2",
  "url": "sec_planes_3d.html#eg_VPparallel-normal-Planes",
  "type": "Example",
  "number": "3.37",
  "title": "",
  "body": " We have just seen that if we write the equation of a plane in the standard form then it is easy to read off a normal vector for the plane. It is just . So for example the planes have normal vectors and , respectively. Since , the two normal vectors and are parallel to each other. This tells us that the planes and are parallel to each other.  When the normal vectors of two planes are perpendicular to each other, we say that the planes are perpendicular to each other. For example the planes have normal vectors and , respectively. Since the normal vectors and are mutually perpendicular, so the corresponding planes and are perpendicular to each other.  "
},
{
  "id": "eg_VPsketchPlane",
  "level": "2",
  "url": "sec_planes_3d.html#eg_VPsketchPlane",
  "type": "Example",
  "number": "3.38",
  "title": "",
  "body": " In this example, we'll sketch the plane A good way to prepare for sketching a plane is to find the intersection points of the plane with the -, - and -axes, just as you are used to doing when sketching lines in the -plane. For example, any point on the axis must be of the form . For to also be on we need . So intersects the -axis at . Similarly, intersects the -axis at and the -axis at . Now plot the points , and . is the plane containing these three points. Often a visually effective way to sketch a surface in three dimensions is to  only sketch the part of the surface in the first octant. That is, the part with , and .  To do so, sketch the curve of intersection of the surface with the part of the -plane in the first octant and,  similarly, sketch the curve of intersection of the surface with the part of the -plane in the first octant and the curve of intersection of the surface with the part of the -plane in the first octant.  That's what we'll do. The intersection of the plane with the -plane is the straight line through the two points and . So the part of that intersection in the first octant is the line segment from to . Similarly the part of the intersection of with the -plane that is in the first octant is the line segment from to and the part of the intersection of with the -plane that is in the first octant is the line segment from to . So we just have to sketch the three line segments joining the three axis intercepts , and . That's it.     "
},
{
  "id": "eg_VPdistance-point-plane",
  "level": "2",
  "url": "sec_planes_3d.html#eg_VPdistance-point-plane",
  "type": "Example",
  "number": "3.39",
  "title": "",
  "body": " In this example, we'll compute the distance between the point By the distance between and the plane we mean the shortest distance between and any point on . In fact, we'll evaluate the distance in two different ways. In the next Example , we'll use projection. In this example, our strategy for finding the distance will be to  first observe that the vector is normal to and then  start walking To see why heading in the normal direction gives the shortest walk, revisit Example . away from in the direction of the normal vector and  keep walking until we hit . Call the point on where we hit, . Then the desired distance is the distance between and . From the figure below it does indeed look like distance between and is the shortest distance between and any point on . This is in fact true, though we won't prove it.       So imagine that we start walking, and that we start at time at and walk in the direction . Then at time we might be at We hit the plane at exactly the time for which satisfies the equation for , which is . So we are on at the unique time obeying So the point on which is closest to is and the distance from to is the distance from to , which is    "
},
{
  "id": "eg_VPdistance-point-plane-bis",
  "level": "2",
  "url": "sec_planes_3d.html#eg_VPdistance-point-plane-bis",
  "type": "Example",
  "number": "3.40",
  "title": "Example Example 3.39, revisited.",
  "body": " Example , revisited  We are again going to find the distance from the point But this time we will use the following strategy.  We'll first find any point on and then  we'll denote by the point on nearest , and we'll denote by the vector from to (see the figure below) and then  we'll realize, by looking at the figure, that the vector from to is exactly the projection Now might be a good time to review the Definition of projection. of the vector on so that  the distance from to , i.e. the length of the vector from to , is exactly .       Now let's find a point on . The plane is given by a single equation, namely in the three unknowns, , , . The easiest way to find one solution to this equation is to assign two of the unknowns the value zero and then solve for the third unknown. For example, if we set , then the equation reduces to . So we may take .  Then , the vector from to is so that, by Equation , and the distance from to is just as we found in Example .  "
},
{
  "id": "eg_VPdistance-Planes",
  "level": "2",
  "url": "sec_planes_3d.html#eg_VPdistance-Planes",
  "type": "Example",
  "number": "3.41",
  "title": "",
  "body": " Now we'll increase the degree of difficulty a tiny bit, and compute the distance between the planes By the distance between the planes and we mean the shortest distance between any pair of points and with in and in . First observe that the normal vectors to and are parallel to each other. So the planes and are parallel to each other. If they had not been parallel, they would have crossed and the distance between them would have been zero.  Our strategy for finding the distance will be to  first find a point on and then, like we did in Example ,  start walking away from in the direction of the normal vector and  keep walking until we hit . Call the point on that we hit . Then the desired distance is the distance between and . From the figure below it does indeed look like distance between and is the shortest distance between any pair of points with one point on and one point on . Again, this is in fact true, though we won't prove it.       We can find a point on just as we did on Example . The plane is given by the single equation in the three unknowns, , , . We can find one solution to this equation by assigning two of the unknowns the value zero and then solving for the third unknown. For example, if we set , then the equation reduces to . So we may take .  Now imagine that we start walking, and that we start at time at and walk in the direction . Then at time we might be at We hit the second plane at exactly the time for which satisfies the equation for , which is . So we are on at the unique time obeying So the point on which is closest to is and the distance from to is the distance from to which is   "
},
{
  "id": "eg_VPangle-Planes",
  "level": "2",
  "url": "sec_planes_3d.html#eg_VPangle-Planes",
  "type": "Example",
  "number": "3.42",
  "title": "",
  "body": " The orientation (i.e. direction) of a plane is determined by its normal vector. So, by definition, the angle between two planes is the angle between their normal vectors. For example, the normal vectors of the two planes are If we use to denote the angle between and , then so that to four decimal places. That's in radians. In degrees, it is to two decimal places.  "
},
{
  "id": "sec_lines_3d",
  "level": "1",
  "url": "sec_lines_3d.html",
  "type": "Section",
  "number": "3.5",
  "title": "Equations of Lines in 3d",
  "body": " Equations of Lines in 3d  Just as in two dimensions, a line in three dimensions can be specified by giving one point on the line and one vector whose direction is parallel to that of the line. If is any point on the line then the vector , whose tail is at and whose arrow is at , must be parallel to and hence a scalar multiple of . By translating this statement into a vector equation we get  Parametric Equations of a Line   or the three corresponding scalar equations    These are called the parametric equations of the line. Solving all three equations for the parameter (assuming that , and are all nonzero) and erasing the again gives the (so called) symmetric equations for the line.  Here is an example in which we find the parametric equations of a line that is given by the intersection of two planes.   The set of points that obey form a plane. The set of points that obey form a second plane. The set of points that obey both and lie on the intersection of these two planes and hence form a line. We shall find the parametric equations for that line.  To sketch we observe that if any two of are zero, then the third is . So all of , and are on . The plane contains all of the -axis, since obeys for all . Here are separate sketches of (parts of) the two planes.      And here is a sketch of their intersection      Method 1. Each point on the line has a different value of . We'll use as the parameter. (We could just as well use or .) There is no law that requires us to use the parameter name , but that's what we have done so far, so set . If is on the line then and The second equation forces . Substituting this into the first equation gives So the parametric equations are    Method 2. We first find one point on the line. There are lots of them. We'll find the point with . (We could just as well use z=123.4, but arguably is a little easier.) If is on the line and , then The second equation again forces . Substituting this into the first equation gives So is on the line. Now we'll find a direction vector, , for the line.  Since the line is contained in the plane , any vector lying on the line, like , is also completely contained in that plane. So must be perpendicular to the normal vector of , which is . Similarly, since the line is contained in the plane , any vector lying on the line, like , is also completely contained in that plane. So must be perpendicular to the normal vector of , which is .  So we may choose for any vector which is perpendicular to both and , like, for example, We now have both a point on the line (namely ) and a direction vector for the line (namely ), so, as usual, the parametric equations for the line are This looks a little different than the solution from method 1, but we'll see in a moment that they are really the same. Before that, let's do one more method.   Method 3. We'll find two points on the line. We have already found that is on the line. From the picture above, it looks like is also on the line. This is indeed the case since obeys both and . Notice that we could also have guessed by setting and then solving , for and . As both and are on the line, the vector with head at and tail at , which is , is a direction vector for the line. As is a point on the line and is a direction vector for the line, the parametric equations for the line are This also looks similar, but not quite identical, to our previous answers. Time for a comparison.   Comparing the answers. The parametric equations given by the three methods are different. That's just because we have really used different parameters in the three methods, even though we have called the parameter in each case. To clarify the relation between the three answers, rename the parameter of method 1 to , the parameter of method 2 to and the parameter of method 3 to . The parametric equations then become Substituting into the Method 1 equations gives the Method 2 equations, and substituting into the Method 3 equations gives the Method 2 equations. So all three really give the same line, just parametrized a little differently.    A line in three dimensions has infinitely many normal vectors  For example, the line has direction vector . Any vector perpendicular to is perpendicular to the line. The vector is perpendicular to if and only if There is whole plane of 's obeying this condition, of which , and are only three examples.   The next two examples illustrate two different methods for finding the distance between a point and a line.   In this example, we find the distance between the point and the line The vector from to the point on is . The square of the distance between and the point on is the square of the length of that vector, namely The point on that is closest to is that whose value of obeys   Before we solve this equation for and finish of our computation, observe that this equation (divided by ) says that That is, the vector from to the point on nearest is perpendicular to 's direction vector .  Now back to our computation. The equation simplifies to . So the optimal and the distance is     Example revisited  In this example, we again find the distance between the point and the line but we use a different method. In the figure below, is the point .     If we drop a perpendicular from to the line , it hits the line at the point , which is the point on that is nearest . So the distance from to is exactly the distance from to , which is exactly the length of the vector from to . In the figure above, is the vector from to . Now the vector has to be perpendicular to the direction vector for . That is, has to be perpendicular to . However, as we saw in Warning , there are a huge number of vectors in different directions that are perpendicular to . So you might think that it is very hard to even determine the direction of .  Fortunately, it isn't. Here is the strategy.  Pick any point on and call it .  It is very easy to find the vector from to  it is just the projection of the vector from to (called in the figure above) on .  Once we know , we will be able to compute   and then the distance from to the line is just .    Here is the computation. We'll choose to be the point on that has , which is . So the vector from to is The projection of on is and then and finally the distance from to the line is    The next two (optional) examples illustrate two different methods for finding the distance between two lines.  (Optional) Distance between lines  In this example, we find the distance between the lines We can rewrite the equations of the lines as Of course the value of in the parametric equation for need not be the same as the value of in the parametric equation for . So let us denote by and the points on and , respectively, that are closest together. Note that the vector from to is . Then, in particular,   is the point on that is closest to the point , and   is the point on that is closest to the point .  So, as we saw in Example , the vector, , that joins and , must be perpendicular to both the direction vector of and the direction vector of . Consequently So and and the distance between and is    Example revisited, again optional  In this example, we again find the distance between the lines this time using a projection, much as in Example . The procedure, which will be justified below, is  first form a vector that is perpendicular to the direction vectors of both lines by taking the cross product of the two direction vectors. In this example, Since we just want to be perpendicular to both direction vectors, we may simplify our computations by dividing this vector by , and take .  Next find one point on and one point on and subtract to form a vector whose tail is at one point and whose head is at the other point. This vector goes from one line to the other line. In this example, the point is on (just set in the equation for ) and the point is on (just set in the equation for ), so that we may take   The distance between the two lines is the length of the projection of on . In this example, by , the distance is just as we found in Example   Now, here is the justification for the procedure.  As we did in Example , denote by and the points on and , respectively, that are closest together. Note that, as we observed in Example , the vector from to is perpendicular to the direction vectors of both lines, and so is parallel to .  Denote by the plane through that is perpendicular to . As is on and the direction vector of is perpendicular to , the line is contained in .  Denote by the plane through that is perpendicular to . As is on and the direction vector of is perpendicular to , the line is contained in .  The planes and are parallel to each other. As is on and is on , and the vector from to is perpendicular to both and , the distance from to is exactly the length of the vector from to . That is also the distance from to .   The vector constructed in the procedure above is a vector between and and so is also a vector between and . Looking at the figure below and possibly reviewing the Definition of projection , we see that the vector from to is (up to a sign) the projection of on .      So the distance from to , and hence the distance from to , is exactly the length of .      "
},
{
  "id": "par_eqn_of_line",
  "level": "2",
  "url": "sec_lines_3d.html#par_eqn_of_line",
  "type": "Fact",
  "number": "3.43",
  "title": "Parametric Equations of a Line.",
  "body": "Parametric Equations of a Line   or the three corresponding scalar equations   "
},
{
  "id": "eg_line_equations",
  "level": "2",
  "url": "sec_lines_3d.html#eg_line_equations",
  "type": "Example",
  "number": "3.44",
  "title": "",
  "body": " The set of points that obey form a plane. The set of points that obey form a second plane. The set of points that obey both and lie on the intersection of these two planes and hence form a line. We shall find the parametric equations for that line.  To sketch we observe that if any two of are zero, then the third is . So all of , and are on . The plane contains all of the -axis, since obeys for all . Here are separate sketches of (parts of) the two planes.      And here is a sketch of their intersection      Method 1. Each point on the line has a different value of . We'll use as the parameter. (We could just as well use or .) There is no law that requires us to use the parameter name , but that's what we have done so far, so set . If is on the line then and The second equation forces . Substituting this into the first equation gives So the parametric equations are    Method 2. We first find one point on the line. There are lots of them. We'll find the point with . (We could just as well use z=123.4, but arguably is a little easier.) If is on the line and , then The second equation again forces . Substituting this into the first equation gives So is on the line. Now we'll find a direction vector, , for the line.  Since the line is contained in the plane , any vector lying on the line, like , is also completely contained in that plane. So must be perpendicular to the normal vector of , which is . Similarly, since the line is contained in the plane , any vector lying on the line, like , is also completely contained in that plane. So must be perpendicular to the normal vector of , which is .  So we may choose for any vector which is perpendicular to both and , like, for example, We now have both a point on the line (namely ) and a direction vector for the line (namely ), so, as usual, the parametric equations for the line are This looks a little different than the solution from method 1, but we'll see in a moment that they are really the same. Before that, let's do one more method.   Method 3. We'll find two points on the line. We have already found that is on the line. From the picture above, it looks like is also on the line. This is indeed the case since obeys both and . Notice that we could also have guessed by setting and then solving , for and . As both and are on the line, the vector with head at and tail at , which is , is a direction vector for the line. As is a point on the line and is a direction vector for the line, the parametric equations for the line are This also looks similar, but not quite identical, to our previous answers. Time for a comparison.   Comparing the answers. The parametric equations given by the three methods are different. That's just because we have really used different parameters in the three methods, even though we have called the parameter in each case. To clarify the relation between the three answers, rename the parameter of method 1 to , the parameter of method 2 to and the parameter of method 3 to . The parametric equations then become Substituting into the Method 1 equations gives the Method 2 equations, and substituting into the Method 3 equations gives the Method 2 equations. So all three really give the same line, just parametrized a little differently.  "
},
{
  "id": "warn_line_normal",
  "level": "2",
  "url": "sec_lines_3d.html#warn_line_normal",
  "type": "Warning",
  "number": "3.45",
  "title": "A line in three dimensions has infinitely many normal vectors.",
  "body": " A line in three dimensions has infinitely many normal vectors  For example, the line has direction vector . Any vector perpendicular to is perpendicular to the line. The vector is perpendicular to if and only if There is whole plane of 's obeying this condition, of which , and are only three examples.  "
},
{
  "id": "eg_VPdistance-point-line",
  "level": "2",
  "url": "sec_lines_3d.html#eg_VPdistance-point-line",
  "type": "Example",
  "number": "3.46",
  "title": "",
  "body": " In this example, we find the distance between the point and the line The vector from to the point on is . The square of the distance between and the point on is the square of the length of that vector, namely The point on that is closest to is that whose value of obeys   Before we solve this equation for and finish of our computation, observe that this equation (divided by ) says that That is, the vector from to the point on nearest is perpendicular to 's direction vector .  Now back to our computation. The equation simplifies to . So the optimal and the distance is   "
},
{
  "id": "eg_VPdistance-point-line-bis",
  "level": "2",
  "url": "sec_lines_3d.html#eg_VPdistance-point-line-bis",
  "type": "Example",
  "number": "3.47",
  "title": "Example Example 3.46 revisited.",
  "body": " Example revisited  In this example, we again find the distance between the point and the line but we use a different method. In the figure below, is the point .     If we drop a perpendicular from to the line , it hits the line at the point , which is the point on that is nearest . So the distance from to is exactly the distance from to , which is exactly the length of the vector from to . In the figure above, is the vector from to . Now the vector has to be perpendicular to the direction vector for . That is, has to be perpendicular to . However, as we saw in Warning , there are a huge number of vectors in different directions that are perpendicular to . So you might think that it is very hard to even determine the direction of .  Fortunately, it isn't. Here is the strategy.  Pick any point on and call it .  It is very easy to find the vector from to  it is just the projection of the vector from to (called in the figure above) on .  Once we know , we will be able to compute   and then the distance from to the line is just .    Here is the computation. We'll choose to be the point on that has , which is . So the vector from to is The projection of on is and then and finally the distance from to the line is   "
},
{
  "id": "eg_VPdistance-line-line",
  "level": "2",
  "url": "sec_lines_3d.html#eg_VPdistance-line-line",
  "type": "Example",
  "number": "3.48",
  "title": "(Optional) Distance between lines.",
  "body": "(Optional) Distance between lines  In this example, we find the distance between the lines We can rewrite the equations of the lines as Of course the value of in the parametric equation for need not be the same as the value of in the parametric equation for . So let us denote by and the points on and , respectively, that are closest together. Note that the vector from to is . Then, in particular,   is the point on that is closest to the point , and   is the point on that is closest to the point .  So, as we saw in Example , the vector, , that joins and , must be perpendicular to both the direction vector of and the direction vector of . Consequently So and and the distance between and is   "
},
{
  "id": "eg_VPdistance-line-line-bis",
  "level": "2",
  "url": "sec_lines_3d.html#eg_VPdistance-line-line-bis",
  "type": "Example",
  "number": "3.49",
  "title": "Example Example 3.48 revisited, again optional.",
  "body": "Example revisited, again optional  In this example, we again find the distance between the lines this time using a projection, much as in Example . The procedure, which will be justified below, is  first form a vector that is perpendicular to the direction vectors of both lines by taking the cross product of the two direction vectors. In this example, Since we just want to be perpendicular to both direction vectors, we may simplify our computations by dividing this vector by , and take .  Next find one point on and one point on and subtract to form a vector whose tail is at one point and whose head is at the other point. This vector goes from one line to the other line. In this example, the point is on (just set in the equation for ) and the point is on (just set in the equation for ), so that we may take   The distance between the two lines is the length of the projection of on . In this example, by , the distance is just as we found in Example   Now, here is the justification for the procedure.  As we did in Example , denote by and the points on and , respectively, that are closest together. Note that, as we observed in Example , the vector from to is perpendicular to the direction vectors of both lines, and so is parallel to .  Denote by the plane through that is perpendicular to . As is on and the direction vector of is perpendicular to , the line is contained in .  Denote by the plane through that is perpendicular to . As is on and the direction vector of is perpendicular to , the line is contained in .  The planes and are parallel to each other. As is on and is on , and the vector from to is perpendicular to both and , the distance from to is exactly the length of the vector from to . That is also the distance from to .   The vector constructed in the procedure above is a vector between and and so is also a vector between and . Looking at the figure below and possibly reviewing the Definition of projection , we see that the vector from to is (up to a sign) the projection of on .      So the distance from to , and hence the distance from to , is exactly the length of .    "
},
{
  "id": "examples",
  "level": "1",
  "url": "examples.html",
  "type": "Section",
  "number": "3.6",
  "title": "Samples of various pretext formats",
  "body": " Samples of various pretext formats     C    D       Does this make a difference?     Here is a paragraph. With quotations and single quotes , emphasis and angles .  Here are examples of the OscarLevin css style.     Here is a part of an ordered list    next part      try again       Here is an itemized list      Here is an itemized list            integral   An integral is a sum.     integral   An integral is a sum.     integral   An integral is a sum.     integral  An integral is a sum.    integral  An integral is a sum.   integral An integral is a sum. A variable is a container for information.   How to do an aside  here is an aside. can you footnote an aside?   with two paragraphs and    It seems that asides get lost a little on the right, so I think I should use them sparingly. How in the heck do you write a paragraph that is readable?  Exercise What  Does this work at all?    What happens if I do this? Blah blah blah     C    D      blah blah   "
},
{
  "id": "objectives-8",
  "level": "2",
  "url": "examples.html#objectives-8",
  "type": "Objectives",
  "number": "3.6",
  "title": "",
  "body": "   C    D    "
},
{
  "id": "investigation-1",
  "level": "2",
  "url": "examples.html#investigation-1",
  "type": "Investigation",
  "number": "3.1",
  "title": "",
  "body": " Does this make a difference?  "
},
{
  "id": "objectives-9",
  "level": "2",
  "url": "examples.html#objectives-9",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": " "
},
{
  "id": "p-467",
  "level": "2",
  "url": "examples.html#p-467",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integral integral integral integral integral integral variable "
},
{
  "id": "exercise-51",
  "level": "2",
  "url": "examples.html#exercise-51",
  "type": "You Try",
  "number": "3.53",
  "title": "Exercise What.",
  "body": "Exercise What  Does this work at all?  "
},
{
  "id": "outcomes-1",
  "level": "2",
  "url": "examples.html#outcomes-1",
  "type": "Outcomes",
  "number": "3.6",
  "title": "",
  "body": "   C    D    "
},
{
  "id": "exercise-52",
  "level": "2",
  "url": "examples.html#exercise-52",
  "type": "Reading Question",
  "number": "1",
  "title": "",
  "body": "blah blah "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
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

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
