import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grdFilter'
})
export class GrdFilterPipe implements PipeTransform {
  transform(items: any, filter: any, defaultFilter: boolean): any {

    if (!filter){
      return items;
    }

    if (!Array.isArray(items)){
      return items;
    }

    if (filter && Array.isArray(items)) {

        if (defaultFilter) {
            // console.log("defaultFilter");
        } else {
            // console.log("!defaultFilter");
            return items.filter(function(item){
               
                if(filter.states[item.Status]){
                    if(filter.text){
                        if(item.Type != 4){
                            // if(item.Solicitud[0].Formulario.CI && item.Solicitud[1].Formulario.nombre && item.Solicitud[1].Formulario.apellido ){

                            //     var alltext = item.Solicitud[1].Formulario.nombre + " " + item.Solicitud[1].Formulario.apellido + " " + item.Solicitud.length + "/" + item.TypeStageLen + " " + item.Solicitud[0].Formulario.CI.split('.').join("").split("-").join("");

                            //     if(alltext.indexOf(filter.text) > -1){
                            //         return true;
                            //     } else {
                            //         return false;
                            //     }
                            // } else {
                            //     return false;
                            // }
                            if(item.Solicitud[0].Formulario.CI && item.FInicio){
                                var fecha = item.FInicio.split('T')[0].split('-');
                                var alltext = item.Solicitud[0].Formulario.CI.split('.').join("").split("-").join("") + " " + fecha[2] + "/" + fecha[1] + "/" + fecha[0];

                                if(alltext.indexOf(filter.text) > -1){
                                    return true;
                                } else {
                                    return false;
                                }
                            }else {
                                return false;
                            }
                        }else{
                            if(item.Solicitud[0].Formulario.nDoc && item.Solicitud[1].Formulario.nombre && item.Solicitud[1].Formulario.apellido){
                               
                                var alltext = item.Solicitud[1].Formulario.nombre + " " + item.Solicitud[1].Formulario.apellido + " " + item.Solicitud.length + "/" + item.TypeStageLen + " " + item.Solicitud[0].Formulario.nDoc.split('.').join("").split("-").join("");
    
                                if(alltext.indexOf(filter.text) > -1){
                                    return true;
                                } else {
                                    return false;
                                }
                            }
                            if(item.Solicitud[0].Formulario.nDoc && item.FInicio){
                                var fecha = item.FInicio.split('T')[0].split('-');
                                var alltext = item.Solicitud[0].Formulario.nDoc.split('.').join("").split("-").join("") + " " + fecha[2] + "/" + fecha[1] + "/" + fecha[0];

                                if(alltext.indexOf(filter.text) > -1){
                                    return true;
                                } else {
                                    return false;
                                }
                            }else {
                                return false;
                            }
                        }                        
                    } else {
                        return true;
                    }
                } else {
                    return false;
                }
            })

        }
      /*  
      let filterKeys = Object.keys(filter);

      if (defaultFilter) {

        return items.filter(item =>
            filterKeys.reduce((x, keyName) =>
                (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] == "", true));
      }
      else {
        return items.filter(item => {
          return filterKeys.some((keyName) => {
            return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "";
          });
        });
      }*/
    }
  }
}