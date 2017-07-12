/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2010, Ajax.org B.V.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */

define('ace/theme/freshcut_contrast', ['require', 'exports', 'module' , 'ace/lib/dom'], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-freshcut-contrast";
exports.cssText = "/* THIS THEME WAS AUTOGENERATED BY Theme.tmpl.css (UUID: 8c4bd735-02f4-0f06-bc2d-2c8e31f71f55) */\
.ace-freshcut-contrast .ace_gutter {\
background: #e8e8e8;\
color: #333;\
}\
.ace-freshcut-contrast .ace_print-margin {\
width: 1px;\
background: #e8e8e8;\
}\
.ace-freshcut-contrast {\
background-color: #000000;\
color: #F8F8F2;\
}\
.ace-freshcut-contrast .ace_cursor {\
color: #f8f8f0;\
}\
.ace-freshcut-contrast .ace_marker-layer .ace_selection {\
background: #008097;\
}\
.ace-freshcut-contrast.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #000000;\
border-radius: 2px;\
}\
.ace-freshcut-contrast .ace_marker-layer .ace_step {\
background: rgb(198, 219, 174);\
}\
.ace-freshcut-contrast .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #3b3a32;\
}\
.ace-freshcut-contrast .ace_marker-layer .ace_active-line {\
background: #151515;\
}\
.ace-freshcut-contrast .ace_gutter-active-line {\
background-color: #151515;\
}\
.ace-freshcut-contrast .ace_marker-layer .ace_selected-word {\
border: 1px solid #008097;\
}\
.ace-freshcut-contrast .ace_fold {\
background-color: #AEE239;\
border-color: #F8F8F2;\
}\
.ace-freshcut-contrast .ace_keyword{color:#C8D7E8;}.ace-freshcut-contrast .ace_keyword.ace_other.ace_unit{color:#4ECDC4;}.ace-freshcut-contrast .ace_constant.ace_language{color:#00A8C6;}.ace-freshcut-contrast .ace_constant.ace_numeric{color:#8FBE00;}.ace-freshcut-contrast .ace_constant.ace_character{color:#00A8C6;}.ace-freshcut-contrast .ace_constant.ace_other{color:#00A8C6;}.ace-freshcut-contrast .ace_support.ace_function{color:#4ECDC4;}.ace-freshcut-contrast .ace_support.ace_constant{color:#00A8C6;}.ace-freshcut-contrast .ace_support.ace_constant.ace_property-value{color:#e9ee00;}.ace-freshcut-contrast .ace_support.ace_class{font-style:italic;\
color:#00A8C6;}.ace-freshcut-contrast .ace_support.ace_type{font-style:italic;\
color:#00A8C6;}.ace-freshcut-contrast .ace_storage{color:#00A8C6;}.ace-freshcut-contrast .ace_storage.ace_type{color:#4ECDC4;}.ace-freshcut-contrast .ace_invalid{color:#f8f8f0;\
background-color:#00a8c6;}.ace-freshcut-contrast .ace_invalid.ace_deprecated{color:#f8f8f0;\
background-color:#00a8c6;}.ace-freshcut-contrast .ace_string{color:#e9ee00;}.ace-freshcut-contrast .ace_comment{color:#737b84;}.ace-freshcut-contrast .ace_variable{color:#AEE239;}.ace-freshcut-contrast .ace_variable.ace_parameter{font-style:italic;}.ace-freshcut-contrast .ace_entity.ace_other.ace_attribute-name{color:#00A8C6;}.ace-freshcut-contrast .ace_entity.ace_name.ace_function{color:#AEE239;}.ace-freshcut-contrast .ace_entity.ace_name.ace_tag{color:#4ECDC4;}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
