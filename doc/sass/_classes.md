# s-color-picker

Generate all the classes needed to style the s-color-picker component and make it fit with the general look and feel of your website


### Example
```html
	<div class="form-group">
 <input type="text" name="color" id="color" placeholder="#ff0000" />
 <s-color-picker for="color"></s-color-picker>
</div>
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com)


## Mixins


### s-color-picker-classes

Print out the bare and style component css


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ List<Color> }**  |  The colors to generate  |  optional  |  default primary secondary


### s-color-picker-classes-bare

Print out the bare component css


### s-color-picker-classes-style

Print out the style component css


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ List<Color> }**  |  The colors to generate  |  optional  |  default primary secondary