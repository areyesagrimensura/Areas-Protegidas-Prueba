var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Amort_SINAP202_Dec571_09_wgs84_ACTUALIZADO_dic_06_2024_1 = new ol.format.GeoJSON();
var features_Amort_SINAP202_Dec571_09_wgs84_ACTUALIZADO_dic_06_2024_1 = format_Amort_SINAP202_Dec571_09_wgs84_ACTUALIZADO_dic_06_2024_1.readFeatures(json_Amort_SINAP202_Dec571_09_wgs84_ACTUALIZADO_dic_06_2024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Amort_SINAP202_Dec571_09_wgs84_ACTUALIZADO_dic_06_2024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Amort_SINAP202_Dec571_09_wgs84_ACTUALIZADO_dic_06_2024_1.addFeatures(features_Amort_SINAP202_Dec571_09_wgs84_ACTUALIZADO_dic_06_2024_1);
var lyr_Amort_SINAP202_Dec571_09_wgs84_ACTUALIZADO_dic_06_2024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Amort_SINAP202_Dec571_09_wgs84_ACTUALIZADO_dic_06_2024_1, 
                style: style_Amort_SINAP202_Dec571_09_wgs84_ACTUALIZADO_dic_06_2024_1,
                popuplayertitle: 'Amort_SINAP202_Dec571_09_wgs84_ACTUALIZADO_dic_06_2024',
                interactive: true,
                title: '<img src="styles/legend/Amort_SINAP202_Dec571_09_wgs84_ACTUALIZADO_dic_06_2024_1.png" /> Amort_SINAP202_Dec571_09_wgs84_ACTUALIZADO_dic_06_2024'
            });
var format_sinap_202_571_174_121_266_ACTUALIZADO_dic_06_2024_2 = new ol.format.GeoJSON();
var features_sinap_202_571_174_121_266_ACTUALIZADO_dic_06_2024_2 = format_sinap_202_571_174_121_266_ACTUALIZADO_dic_06_2024_2.readFeatures(json_sinap_202_571_174_121_266_ACTUALIZADO_dic_06_2024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sinap_202_571_174_121_266_ACTUALIZADO_dic_06_2024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sinap_202_571_174_121_266_ACTUALIZADO_dic_06_2024_2.addFeatures(features_sinap_202_571_174_121_266_ACTUALIZADO_dic_06_2024_2);
var lyr_sinap_202_571_174_121_266_ACTUALIZADO_dic_06_2024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sinap_202_571_174_121_266_ACTUALIZADO_dic_06_2024_2, 
                style: style_sinap_202_571_174_121_266_ACTUALIZADO_dic_06_2024_2,
                popuplayertitle: 'sinap_202_571_174_121_266_ACTUALIZADO_dic_06_2024',
                interactive: true,
                title: '<img src="styles/legend/sinap_202_571_174_121_266_ACTUALIZADO_dic_06_2024_2.png" /> sinap_202_571_174_121_266_ACTUALIZADO_dic_06_2024'
            });
var format_SierradeNeiba_3 = new ol.format.GeoJSON();
var features_SierradeNeiba_3 = format_SierradeNeiba_3.readFeatures(json_SierradeNeiba_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SierradeNeiba_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SierradeNeiba_3.addFeatures(features_SierradeNeiba_3);
var lyr_SierradeNeiba_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SierradeNeiba_3, 
                style: style_SierradeNeiba_3,
                popuplayertitle: 'Sierra de Neiba',
                interactive: true,
                title: '<img src="styles/legend/SierradeNeiba_3.png" /> Sierra de Neiba'
            });
var format_ZonadeAmortiguamientoSierradeNeiba_4 = new ol.format.GeoJSON();
var features_ZonadeAmortiguamientoSierradeNeiba_4 = format_ZonadeAmortiguamientoSierradeNeiba_4.readFeatures(json_ZonadeAmortiguamientoSierradeNeiba_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonadeAmortiguamientoSierradeNeiba_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonadeAmortiguamientoSierradeNeiba_4.addFeatures(features_ZonadeAmortiguamientoSierradeNeiba_4);
var lyr_ZonadeAmortiguamientoSierradeNeiba_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonadeAmortiguamientoSierradeNeiba_4, 
                style: style_ZonadeAmortiguamientoSierradeNeiba_4,
                popuplayertitle: 'Zona de Amortiguamiento Sierra de Neiba',
                interactive: true,
                title: '<img src="styles/legend/ZonadeAmortiguamientoSierradeNeiba_4.png" /> Zona de Amortiguamiento Sierra de Neiba'
            });
var format_administrative_HAI_5 = new ol.format.GeoJSON();
var features_administrative_HAI_5 = format_administrative_HAI_5.readFeatures(json_administrative_HAI_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_administrative_HAI_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_administrative_HAI_5.addFeatures(features_administrative_HAI_5);
var lyr_administrative_HAI_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_administrative_HAI_5, 
                style: style_administrative_HAI_5,
                popuplayertitle: 'administrative_HAI',
                interactive: true,
                title: '<img src="styles/legend/administrative_HAI_5.png" /> administrative_HAI'
            });
var format_dom_admbnda_adm0_one_20210629_6 = new ol.format.GeoJSON();
var features_dom_admbnda_adm0_one_20210629_6 = format_dom_admbnda_adm0_one_20210629_6.readFeatures(json_dom_admbnda_adm0_one_20210629_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dom_admbnda_adm0_one_20210629_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dom_admbnda_adm0_one_20210629_6.addFeatures(features_dom_admbnda_adm0_one_20210629_6);
var lyr_dom_admbnda_adm0_one_20210629_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dom_admbnda_adm0_one_20210629_6, 
                style: style_dom_admbnda_adm0_one_20210629_6,
                popuplayertitle: 'dom_admbnda_adm0_one_20210629',
                interactive: true,
                title: '<img src="styles/legend/dom_admbnda_adm0_one_20210629_6.png" /> dom_admbnda_adm0_one_20210629'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Amort_SINAP202_Dec571_09_wgs84_ACTUALIZADO_dic_06_2024_1.setVisible(true);lyr_sinap_202_571_174_121_266_ACTUALIZADO_dic_06_2024_2.setVisible(true);lyr_SierradeNeiba_3.setVisible(true);lyr_ZonadeAmortiguamientoSierradeNeiba_4.setVisible(true);lyr_administrative_HAI_5.setVisible(true);lyr_dom_admbnda_adm0_one_20210629_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Amort_SINAP202_Dec571_09_wgs84_ACTUALIZADO_dic_06_2024_1,lyr_sinap_202_571_174_121_266_ACTUALIZADO_dic_06_2024_2,lyr_SierradeNeiba_3,lyr_ZonadeAmortiguamientoSierradeNeiba_4,lyr_administrative_HAI_5,lyr_dom_admbnda_adm0_one_20210629_6];
lyr_Amort_SINAP202_Dec571_09_wgs84_ACTUALIZADO_dic_06_2024_1.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', 'Cod_UICN': 'Cod_UICN', 'Formato': 'Formato', 'CATEGORIA': 'CATEGORIA', 'SUBCAT': 'SUBCAT', 'BUFF_DIST': 'BUFF_DIST', 'Base_Legal': 'Base_Legal', 'N_Data': 'N_Data', 'Mts': 'Mts', });
lyr_sinap_202_571_174_121_266_ACTUALIZADO_dic_06_2024_2.set('fieldAliases', {'ID': 'ID', 'NOMBRE': 'NOMBRE', 'COD_UICN': 'COD_UICN', 'CATEGORIA': 'CATEGORIA', 'SUBCAT': 'SUBCAT', 'SUBCAT1': 'SUBCAT1', 'SQ_KM': 'SQ_KM', 'Id_Leyenda': 'Id_Leyenda', 'Base_Legal': 'Base_Legal', 'OBJECTID': 'OBJECTID', 'NOM_CATEG': 'NOM_CATEG', 'CATG_NOM': 'CATG_NOM', 'N_Data': 'N_Data', 'Est_Oficia': 'Est_Oficia', 'N_Data2': 'N_Data2', 'L_CAT_NOM': 'L_CAT_NOM', });
lyr_SierradeNeiba_3.set('fieldAliases', {'id': 'id', });
lyr_ZonadeAmortiguamientoSierradeNeiba_4.set('fieldAliases', {'id': 'id', });
lyr_administrative_HAI_5.set('fieldAliases', {'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'name': 'name', 'type': 'type', 'aeroway': 'aeroway', 'amenity': 'amenity', 'admin_leve': 'admin_leve', 'barrier': 'barrier', 'boundary': 'boundary', 'building': 'building', 'craft': 'craft', 'geological': 'geological', 'historic': 'historic', 'land_area': 'land_area', 'landuse': 'landuse', 'leisure': 'leisure', 'man_made': 'man_made', 'military': 'military', 'natural': 'natural', 'office': 'office', 'place': 'place', 'shop': 'shop', 'sport': 'sport', 'tourism': 'tourism', 'other_tags': 'other_tags', });
lyr_dom_admbnda_adm0_one_20210629_6.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM0_EN': 'ADM0_EN', 'ADM0_ES': 'ADM0_ES', 'ADM0_PCODE': 'ADM0_PCODE', 'ADM0_REF': 'ADM0_REF', 'ADM0ALT1EN': 'ADM0ALT1EN', 'ADM0ALT2EN': 'ADM0ALT2EN', 'ADM0ALT1ES': 'ADM0ALT1ES', 'ADM0ALT2ES': 'ADM0ALT2ES', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_Amort_SINAP202_Dec571_09_wgs84_ACTUALIZADO_dic_06_2024_1.set('fieldImages', {'Id': 'TextEdit', 'Nombre': 'TextEdit', 'Cod_UICN': 'TextEdit', 'Formato': 'TextEdit', 'CATEGORIA': 'TextEdit', 'SUBCAT': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'Base_Legal': 'TextEdit', 'N_Data': 'TextEdit', 'Mts': 'TextEdit', });
lyr_sinap_202_571_174_121_266_ACTUALIZADO_dic_06_2024_2.set('fieldImages', {'ID': 'TextEdit', 'NOMBRE': 'TextEdit', 'COD_UICN': 'TextEdit', 'CATEGORIA': 'TextEdit', 'SUBCAT': 'TextEdit', 'SUBCAT1': 'TextEdit', 'SQ_KM': 'TextEdit', 'Id_Leyenda': 'TextEdit', 'Base_Legal': 'TextEdit', 'OBJECTID': 'TextEdit', 'NOM_CATEG': 'TextEdit', 'CATG_NOM': 'TextEdit', 'N_Data': 'TextEdit', 'Est_Oficia': 'TextEdit', 'N_Data2': 'TextEdit', 'L_CAT_NOM': 'TextEdit', });
lyr_SierradeNeiba_3.set('fieldImages', {'id': 'TextEdit', });
lyr_ZonadeAmortiguamientoSierradeNeiba_4.set('fieldImages', {'id': 'TextEdit', });
lyr_administrative_HAI_5.set('fieldImages', {'osm_id': 'TextEdit', 'osm_way_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'aeroway': 'TextEdit', 'amenity': 'TextEdit', 'admin_leve': 'TextEdit', 'barrier': 'TextEdit', 'boundary': 'TextEdit', 'building': 'TextEdit', 'craft': 'TextEdit', 'geological': 'TextEdit', 'historic': 'TextEdit', 'land_area': 'TextEdit', 'landuse': 'TextEdit', 'leisure': 'TextEdit', 'man_made': 'TextEdit', 'military': 'TextEdit', 'natural': 'TextEdit', 'office': 'TextEdit', 'place': 'TextEdit', 'shop': 'TextEdit', 'sport': 'TextEdit', 'tourism': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_dom_admbnda_adm0_one_20210629_6.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_ES': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'ADM0_REF': 'TextEdit', 'ADM0ALT1EN': 'TextEdit', 'ADM0ALT2EN': 'TextEdit', 'ADM0ALT1ES': 'TextEdit', 'ADM0ALT2ES': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_Amort_SINAP202_Dec571_09_wgs84_ACTUALIZADO_dic_06_2024_1.set('fieldLabels', {'Id': 'hidden field', 'Nombre': 'inline label - always visible', 'Cod_UICN': 'inline label - always visible', 'Formato': 'hidden field', 'CATEGORIA': 'inline label - always visible', 'SUBCAT': 'hidden field', 'BUFF_DIST': 'hidden field', 'Base_Legal': 'hidden field', 'N_Data': 'hidden field', 'Mts': 'hidden field', });
lyr_sinap_202_571_174_121_266_ACTUALIZADO_dic_06_2024_2.set('fieldLabels', {'ID': 'hidden field', 'NOMBRE': 'inline label - always visible', 'COD_UICN': 'hidden field', 'CATEGORIA': 'inline label - always visible', 'SUBCAT': 'inline label - always visible', 'SUBCAT1': 'hidden field', 'SQ_KM': 'hidden field', 'Id_Leyenda': 'hidden field', 'Base_Legal': 'hidden field', 'OBJECTID': 'hidden field', 'NOM_CATEG': 'hidden field', 'CATG_NOM': 'hidden field', 'N_Data': 'hidden field', 'Est_Oficia': 'hidden field', 'N_Data2': 'hidden field', 'L_CAT_NOM': 'hidden field', });
lyr_SierradeNeiba_3.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_ZonadeAmortiguamientoSierradeNeiba_4.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_administrative_HAI_5.set('fieldLabels', {'osm_id': 'hidden field', 'osm_way_id': 'hidden field', 'name': 'hidden field', 'type': 'hidden field', 'aeroway': 'hidden field', 'amenity': 'hidden field', 'admin_leve': 'hidden field', 'barrier': 'hidden field', 'boundary': 'hidden field', 'building': 'hidden field', 'craft': 'hidden field', 'geological': 'hidden field', 'historic': 'hidden field', 'land_area': 'hidden field', 'landuse': 'hidden field', 'leisure': 'hidden field', 'man_made': 'hidden field', 'military': 'hidden field', 'natural': 'hidden field', 'office': 'hidden field', 'place': 'hidden field', 'shop': 'hidden field', 'sport': 'hidden field', 'tourism': 'hidden field', 'other_tags': 'hidden field', });
lyr_dom_admbnda_adm0_one_20210629_6.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'ADM0_EN': 'hidden field', 'ADM0_ES': 'hidden field', 'ADM0_PCODE': 'hidden field', 'ADM0_REF': 'hidden field', 'ADM0ALT1EN': 'hidden field', 'ADM0ALT2EN': 'hidden field', 'ADM0ALT1ES': 'hidden field', 'ADM0ALT2ES': 'hidden field', 'date': 'hidden field', 'validOn': 'hidden field', 'validTo': 'hidden field', });
lyr_dom_admbnda_adm0_one_20210629_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});