!function(e){var t;e.filters=t={options:{regional:{datePicker:{dateFormat:"mm/dd/yy"}}},append:function(t,l,i,a,s,n,o){var d="f["+l+"]["+o+"][v]",c="f["+l+"]["+o+"][o]";switch(i){case"boolean":var p='<select class="input-small" name="'+d+'">'+'<option value="_discard">...</option>'+'<option value="true"'+("true"==a?'selected="selected"':"")+">True</option>"+'<option value="false"'+("false"==a?'selected="selected"':"")+">False</option>"+'<option disabled="disabled">---------</option>'+"<option "+("_present"==a?'selected="selected"':"")+' value="_present">Is present</option>'+"<option "+("_blank"==a?'selected="selected"':"")+' value="_blank"  >Is blank</option>'+"</select>";break;case"date":case"datetime":case"timestamp":var p='<select class="switch-additionnal-fieldsets input-small" name="'+c+'">'+"<option "+("default"==s?'selected="selected"':"")+' data-additional-fieldset="default" value="default">Date ...</option>'+"<option "+("between"==s?'selected="selected"':"")+' data-additional-fieldset="between" value="between">Between ... and ...</option>'+"<option "+("today"==s?'selected="selected"':"")+' value="today">Today</option>'+"<option "+("yesterday"==s?'selected="selected"':"")+' value="yesterday">Yesterday</option>'+"<option "+("this_week"==s?'selected="selected"':"")+' value="this_week">This week</option>'+"<option "+("last_week"==s?'selected="selected"':"")+' value="last_week">Last week</option>'+'<option disabled="disabled">---------</option>'+"<option "+("_not_null"==s?'selected="selected"':"")+' value="_not_null">Is present</option>'+"<option "+("_null"==s?'selected="selected"':"")+' value="_null" >Is blank</option>'+"</select>",u='<input class="date additional-fieldset default input-small" style="display:'+(s&&"default"!=s?"none":"inline-block")+';" type="text" name="'+d+'[]" value="'+(a[0]||"")+'" /> '+'<input placeholder="-∞" class="date additional-fieldset between input-small" style="display:'+("between"==s?"inline-block":"none")+';" type="text" name="'+d+'[]" value="'+(a[1]||"")+'" /> '+'<input placeholder="∞" class="date additional-fieldset between input-small" style="display:'+("between"==s?"inline-block":"none")+';" type="text" name="'+d+'[]" value="'+(a[2]||"")+'" />';break;case"enum":var r=a instanceof Array?!0:!1,p='<select style="display:'+(r?"none":"inline-block")+'" '+(r?"":'name="'+d+'"')+' data-name="'+d+'" class="select-single input-small">'+'<option value="_discard">...</option>'+"<option "+("_present"==a?'selected="selected"':"")+' value="_present">Is present</option>'+"<option "+("_blank"==a?'selected="selected"':"")+' value="_blank">Is blank</option>'+'<option disabled="disabled">---------</option>'+n+"</select>"+'<select multiple="multiple" style="display:'+(r?"inline-block":"none")+'" '+(r?'name="'+d+'[]"':"")+' data-name="'+d+'[]" class="select-multiple input-small">'+n+"</select> "+'<a href="#" class="switch-select"><i class="icon-'+(r?"minus":"plus")+'"></i></a>';break;case"string":case"text":case"belongs_to_association":var p='<select class="switch-additionnal-fieldsets input-small" value="'+s+'" name="'+c+'">'+'<option data-additional-fieldset="additional-fieldset"'+("like"==s?'selected="selected"':"")+' value="like">Contains</option>'+'<option data-additional-fieldset="additional-fieldset"'+("is"==s?'selected="selected"':"")+' value="is">Is exactly</option>'+'<option data-additional-fieldset="additional-fieldset"'+("starts_with"==s?'selected="selected"':"")+' value="starts_with">Starts with</option>'+'<option data-additional-fieldset="additional-fieldset"'+("ends_with"==s?'selected="selected"':"")+' value="ends_with">Ends with</option>'+'<option disabled="disabled">---------</option>'+"<option "+("_present"==s?'selected="selected"':"")+' value="_present">Is present</option>'+"<option "+("_blank"==s?'selected="selected"':"")+' value="_blank">Is blank</option>'+"</select>",u='<input class="additional-fieldset input-small" style="display:'+("_blank"==s||"_present"==s?"none":"inline-block")+';" type="text" name="'+d+'" value="'+a+'" /> ';break;case"integer":case"decimal":case"float":var p='<select class="switch-additionnal-fieldsets input-small" name="'+c+'">'+"<option "+("default"==s?'selected="selected"':"")+' data-additional-fieldset="default" value="default">Number ...</option>'+"<option "+("between"==s?'selected="selected"':"")+' data-additional-fieldset="between" value="between">Between ... and ...</option>'+'<option disabled="disabled">---------</option>'+"<option "+("_not_null"==s?'selected="selected"':"")+' value="_not_null">Is present</option>'+"<option "+("_null"==s?'selected="selected"':"")+' value="_null" >Is blank</option>'+"</select>",u='<input class="additional-fieldset default input-small" style="display:'+(s&&"default"!=s?"none":"inline-block")+';" type="'+i+'" name="'+d+'[]" value="'+(a[0]||"")+'" /> '+'<input placeholder="-∞" class="additional-fieldset between input-small" style="display:'+("between"==s?"inline-block":"none")+';" type="'+i+'" name="'+d+'[]" value="'+(a[1]||"")+'" /> '+'<input placeholder="∞" class="additional-fieldset between input-small" style="display:'+("between"==s?"inline-block":"none")+';" type="'+i+'" name="'+d+'[]" value="'+(a[2]||"")+'" />';break;default:var p='<input type="text" class="input-small" name="'+d+'" value="'+a+'"/> '}var f='<p class="filter form-search"><span class="label label-info form-label"><a href="#" class="delete"><i class="icon-trash icon-white"></i></a> '+t+"</span> "+p+" "+(u||"")+"</p> ";e("#filters_box").append(f),e("#filters_box .date").datepicker(this.options.regional.datePicker),e("hr.filters_box:hidden").show("slow")}},e(document).on("click","#filters a",function(t){t.preventDefault(),e.filters.append(e(this).data("field-label"),e(this).data("field-name"),e(this).data("field-type"),e(this).data("field-value"),e(this).data("field-operator"),e(this).data("field-options"),e.now().toString().slice(6,11))}),e(document).on("click","#filters_box .delete",function(t){t.preventDefault(),form=e(this).parents("form"),e(this).parents(".filter").remove(),!e("#filters_box").children().length&&e("hr.filters_box:visible").hide("slow")}),e(document).on("click","#filters_box .switch-select",function(t){t.preventDefault();var l=e(this).siblings("select:visible"),i=e(this).siblings("select:hidden");i.attr("name",i.data("name")).show("slow"),l.attr("name",null).hide("slow"),e(this).find("i").toggleClass("icon-plus icon-minus")}),e(document).on("change","#filters_box .switch-additionnal-fieldsets",function(){var t=e(this).find("option:selected");(klass=e(t).data("additional-fieldset"))?(e(this).siblings(".additional-fieldset:not(."+klass+")").hide("slow"),e(this).siblings("."+klass).show("slow")):e(this).siblings(".additional-fieldset").hide("slow")})}(jQuery);