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

define('ace/theme/peel', ['require', 'exports', 'module' , 'ace/lib/dom'], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-peel";
exports.cssText = "/* THIS THEME WAS AUTOGENERATED BY Theme.tmpl.css (UUID: 2dc90997-31a1-ef0b-ccbf-27b0139c11d1) */\
.ace-peel .ace_gutter {\
background: #e8e8e8;\
color: #333;\
}\
.ace-peel .ace_print-margin {\
width: 1px;\
background: #e8e8e8;\
}\
.ace-peel {\
background-color: #23201c;\
color: #EDEBE6;\
}\
.ace-peel .ace_cursor {\
color: #f8f8f0;\
}\
.ace-peel .ace_marker-layer .ace_selection {\
background: #D3643B;\
}\
.ace-peel.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #23201c;\
border-radius: 2px;\
}\
.ace-peel .ace_marker-layer .ace_step {\
background: rgb(198, 219, 174);\
}\
.ace-peel .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #3b3a32;\
}\
.ace-peel .ace_marker-layer .ace_active-line {\
background: #403c37;\
}\
.ace-peel .ace_gutter-active-line {\
background-color: #403c37;\
}\
.ace-peel .ace_marker-layer .ace_selected-word {\
border: 1px solid #D3643B;\
}\
.ace-peel .ace_fold {\
background-color: #D6E1C7;\
border-color: #EDEBE6;\
}\
.ace-peel .ace_keyword{color:#94C7B6;}.ace-peel .ace_keyword.ace_other.ace_unit{color:#94C7B6;}.ace-peel .ace_constant.ace_language{color:#D3643B;}.ace-peel .ace_constant.ace_numeric{color:#f4d370;}.ace-peel .ace_constant.ace_character{color:#D3643B;}.ace-peel .ace_constant.ace_other{color:#D3643B;}.ace-peel .ace_support.ace_function{color:#D3643B;}.ace-peel .ace_support.ace_constant{color:#D3643B;}.ace-peel .ace_support.ace_constant.ace_property-value{color:#f4d370;}.ace-peel .ace_support.ace_class{font-style:italic;\
color:#D3643B;}.ace-peel .ace_support.ace_type{font-style:italic;\
color:#D3643B;}.ace-peel .ace_storage{color:#D3643B;}.ace-peel .ace_storage.ace_type{color:#94C7B6;}.ace-peel .ace_invalid{color:#f8f8f0;\
background-color:#00a8c6;}.ace-peel .ace_invalid.ace_deprecated{color:#f8f8f0;\
background-color:#00a8c6;}.ace-peel .ace_string{color:#f4d370;}.ace-peel .ace_comment{color:#585146;}.ace-peel .ace_variable{color:#D6E1C7;}.ace-peel .ace_variable.ace_parameter{font-style:italic;\
color:#EDEBE6;}.ace-peel .ace_entity.ace_other.ace_attribute-name{color:#D3643B;}.ace-peel .ace_entity.ace_name.ace_function{color:#D6E1C7;}.ace-peel .ace_entity.ace_name.ace_tag{color:#94C7B6;}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
