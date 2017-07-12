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

define('ace/theme/goldfish', ['require', 'exports', 'module' , 'ace/lib/dom'], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-goldfish";
exports.cssText = "/* THIS THEME WAS AUTOGENERATED BY Theme.tmpl.css (UUID: 96dcd3f3-4f6b-0046-9c77-915b5ab45550) */\
.ace-goldfish .ace_gutter {\
background: #e8e8e8;\
color: #333;\
}\
.ace-goldfish .ace_print-margin {\
width: 1px;\
background: #e8e8e8;\
}\
.ace-goldfish {\
background-color: #2E3336;\
color: #F8F8F2;\
}\
.ace-goldfish .ace_cursor {\
color: #f8f8f0;\
}\
.ace-goldfish .ace_marker-layer .ace_selection {\
background: #F38630;\
}\
.ace-goldfish.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #2E3336;\
border-radius: 2px;\
}\
.ace-goldfish .ace_marker-layer .ace_step {\
background: rgb(198, 219, 174);\
}\
.ace-goldfish .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #3b3a32;\
}\
.ace-goldfish .ace_marker-layer .ace_active-line {\
background: #465459;\
}\
.ace-goldfish .ace_gutter-active-line {\
background-color: #465459;\
}\
.ace-goldfish .ace_marker-layer .ace_selected-word {\
border: 1px solid #F38630;\
}\
.ace-goldfish .ace_fold {\
background-color: #69D2E7;\
border-color: #F8F8F2;\
}\
.ace-goldfish .ace_keyword{color:#A7DBD8;}.ace-goldfish .ace_keyword.ace_other.ace_unit{color:#F38630;}.ace-goldfish .ace_constant.ace_language{color:#FA6900;}.ace-goldfish .ace_constant.ace_numeric{color:#f25619;}.ace-goldfish .ace_constant.ace_character{color:#FA6900;}.ace-goldfish .ace_constant.ace_other{color:#FA6900;}.ace-goldfish .ace_support.ace_function{color:#F38630;}.ace-goldfish .ace_support.ace_constant{color:#FA6900;}.ace-goldfish .ace_support.ace_constant.ace_property-value{color:#f36e3a;}.ace-goldfish .ace_support.ace_class{font-style:italic;\
color:#FA6900;}.ace-goldfish .ace_support.ace_type{font-style:italic;\
color:#FA6900;}.ace-goldfish .ace_storage{color:#FA6900;}.ace-goldfish .ace_storage.ace_type{color:#F38630;}.ace-goldfish .ace_invalid{color:#f8f8f0;\
background-color:#00a8c6;}.ace-goldfish .ace_invalid.ace_deprecated{color:#f8f8f0;\
background-color:#00a8c6;}.ace-goldfish .ace_string{color:#f36e3a;}.ace-goldfish .ace_comment{color:#505C63;}.ace-goldfish .ace_variable{color:#69D2E7;}.ace-goldfish .ace_variable.ace_parameter{font-style:italic;}.ace-goldfish .ace_entity.ace_other.ace_attribute-name{color:#FA6900;}.ace-goldfish .ace_entity.ace_name.ace_function{color:#69D2E7;}.ace-goldfish .ace_entity.ace_name.ace_tag{color:#F38630;}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
