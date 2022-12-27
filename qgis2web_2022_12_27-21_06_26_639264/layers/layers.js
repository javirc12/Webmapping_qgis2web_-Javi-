var wms_layers = [];

var lyr_FondoMapasrasterdelIGN_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.ign.es/wms-inspire/mapa-raster",
    attributions: ' ',
                              params: {
                                "LAYERS": "mtn_rasterizado",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Fondo/Mapas raster del IGN",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FondoMapasrasterdelIGN_0, 0]);
var format_segmentacion_vect_1 = new ol.format.GeoJSON();
var features_segmentacion_vect_1 = format_segmentacion_vect_1.readFeatures(json_segmentacion_vect_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_segmentacion_vect_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_segmentacion_vect_1.addFeatures(features_segmentacion_vect_1);
var lyr_segmentacion_vect_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_segmentacion_vect_1, 
                style: style_segmentacion_vect_1,
                interactive: true,
                title: '<img src="styles/legend/segmentacion_vect_1.png" /> segmentacion_vect'
            });
var format_Limites_montes_2 = new ol.format.GeoJSON();
var features_Limites_montes_2 = format_Limites_montes_2.readFeatures(json_Limites_montes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limites_montes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limites_montes_2.addFeatures(features_Limites_montes_2);
var lyr_Limites_montes_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limites_montes_2, 
                style: style_Limites_montes_2,
                interactive: true,
                title: '<img src="styles/legend/Limites_montes_2.png" /> Limites_montes'
            });

lyr_FondoMapasrasterdelIGN_0.setVisible(true);lyr_segmentacion_vect_1.setVisible(true);lyr_Limites_montes_2.setVisible(true);
var layersList = [lyr_FondoMapasrasterdelIGN_0,lyr_segmentacion_vect_1,lyr_Limites_montes_2];
lyr_segmentacion_vect_1.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Area': 'Area', });
lyr_Limites_montes_2.set('fieldAliases', {'CODIGO_JA': 'CODIGO_JA', 'NOMBRE': 'NOMBRE', 'ACCESO_INF': 'ACCESO_INF', 'PROVINCIAS': 'PROVINCIAS', 'TIPO_TITUL': 'TIPO_TITUL', 'SUP_HA': 'SUP_HA', });
lyr_segmentacion_vect_1.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'Area': 'TextEdit', });
lyr_Limites_montes_2.set('fieldImages', {'CODIGO_JA': 'TextEdit', 'NOMBRE': 'TextEdit', 'ACCESO_INF': 'TextEdit', 'PROVINCIAS': 'TextEdit', 'TIPO_TITUL': 'TextEdit', 'SUP_HA': 'TextEdit', });
lyr_segmentacion_vect_1.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'Area': 'no label', });
lyr_Limites_montes_2.set('fieldLabels', {'CODIGO_JA': 'no label', 'NOMBRE': 'no label', 'ACCESO_INF': 'no label', 'PROVINCIAS': 'no label', 'TIPO_TITUL': 'no label', 'SUP_HA': 'no label', });
lyr_Limites_montes_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});