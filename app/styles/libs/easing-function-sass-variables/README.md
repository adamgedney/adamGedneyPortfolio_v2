# easing-function-sass-variables
Variables containing the cubic-bezier value for the various easing functions. Useful for performing css3 keyframe animations.

## Using

Import the file `_easingFunctionValues.scss` file into your project before the files you will need to use the variables in.

```scss
@import "./easingFunctionValues";
```

Use a variable in one of your animations:
```scss
-webkit-animation: zoomFromZero 4s 1 $ef-ease-in-quad;
```

Here are all the variables and values, for reference:

```scss
$ef-linear : cubic-bezier(0.250, 0.250, 0.750, 0.750);
$ef-ease : cubic-bezier(0.250, 0.100, 0.250, 1.000);
$ef-ease-in : cubic-bezier(0.420, 0.000, 1.000, 1.000);
$ef-ease-out : cubic-bezier(0.000, 0.000, 0.580, 1.000);
$ef-ease-in-out : cubic-bezier(0.420, 0.000, 0.580, 1.000);
$ef-ease-in-quad : cubic-bezier(0.550, 0.085, 0.680, 0.530);
$ef-ease-in-cubic : cubic-bezier(0.550, 0.055, 0.675, 0.190);
$ef-ease-in-quart : cubic-bezier(0.895, 0.030, 0.685, 0.220);
$ef-ease-in-quint : cubic-bezier(0.755, 0.050, 0.855, 0.060);
$ef-ease-in-sine : cubic-bezier(0.470, 0.000, 0.745, 0.715);
$ef-ease-in-expo : cubic-bezier(0.950, 0.050, 0.795, 0.035);
$ef-ease-in-circ : cubic-bezier(0.600, 0.040, 0.980, 0.335);
$ef-ease-in-back : cubic-bezier(0.600, -0.280, 0.735, 0.045);
$ef-ease-out-quad : cubic-bezier(0.250, 0.460, 0.450, 0.940);
$ef-ease-out-cubic : cubic-bezier(0.215, 0.610, 0.355, 1.000);
$ef-ease-out-quart : cubic-bezier(0.165, 0.840, 0.440, 1.000);
$ef-ease-out-quint : cubic-bezier(0.230, 1.000, 0.320, 1.000);
$ef-ease-out-sine : cubic-bezier(0.390, 0.575, 0.565, 1.000);
$ef-ease-out-expo : cubic-bezier(0.190, 1.000, 0.220, 1.000);
$ef-ease-out-circ : cubic-bezier(0.075, 0.820, 0.165, 1.000);
$ef-ease-out-back : cubic-bezier(0.175, 0.885, 0.320, 1.275);
$ef-ease-in-out-quad : cubic-bezier(0.455, 0.030, 0.515, 0.955);
$ef-ease-in-out-cubic : cubic-bezier(0.645, 0.045, 0.355, 1.000);
$ef-ease-in-out-quart : cubic-bezier(0.770, 0.000, 0.175, 1.000);
$ef-ease-in-out-quint : cubic-bezier(0.860, 0.000, 0.070, 1.000);
$ef-ease-in-out-sine : cubic-bezier(0.445, 0.050, 0.550, 0.950);
$ef-ease-in-out-expo : cubic-bezier(1.000, 0.000, 0.000, 1.000);
$ef-ease-in-out-circ : cubic-bezier(0.785, 0.135, 0.150, 0.860);
$ef-ease-in-out-back : cubic-bezier(0.680, -0.550, 0.265, 1.550);
```