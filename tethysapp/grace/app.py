from tethys_sdk.base import TethysAppBase, url_map_maker
from tethys_sdk.app_settings import PersistentStoreDatabaseSetting, PersistentStoreConnectionSetting

class Grace(TethysAppBase):
    """
    Tethys app class for GRACE.
    """

    name = 'GRACE'
    index = 'grace:home'
    icon = 'grace/images/logo.jpg'
    package = 'grace'
    root_url = 'grace'
    color = '#e74c3c'
    description = 'The GRACE application is a visualization tool for GRACE global satellite data.  It also provides visualization for global surface water, soil moisture, and groundwater data.'
    tags = 'Hydrology'
    enable_feedback = False
    feedback_emails = []

    def url_maps(self):
        """
        Add controllers
        """
        UrlMap = url_map_maker(self.root_url)

        url_maps = (
            UrlMap(
                name='home',
                url='grace',
                controller='grace.controllers.home'
            ),
            UrlMap(name='api',
                   url='grace/api',
                   controller='grace.controllers.api'),
            UrlMap(name='global-map',
                   url='grace/global-map',
                   controller='grace.controllers.global_map'),

            UrlMap(name='grace/plot',
                   url='grace/plot',
                   controller='grace.ajax_controllers.get_plot'),

            UrlMap(name='grace/plot-global-tot',
                   url='grace/plot-global-tot',
                   controller='grace.ajax_controllers.get_plot_global_tot'),
            UrlMap(name='grace/plot-global-sw',
                   url='grace/plot-global-sw',
                   controller='grace.ajax_controllers.get_plot_global_sw'),
            UrlMap(name='grace/plot-global-soil',
                   url='grace/plot-global-soil',
                   controller='grace.ajax_controllers.get_plot_global_soil'),
            UrlMap(name='grace/plot-global-gw',
                   url='grace/plot-global-gw',
                   controller='grace.ajax_controllers.get_plot_global_gw'),

            UrlMap(name='add-region',
                   url='grace/add-region',
                   controller='grace.controllers.add_region'),
            UrlMap(name='add-region-ajax',
                   url='grace/add-region/submit',
                   controller='grace.ajax_controllers.region_add'),

            UrlMap(name='manage-regions',
                   url='grace/manage-regions',
                   controller='grace.controllers.manage_regions'),
            UrlMap(name='manage-regions-table',
                   url='grace/manage-regions/table',
                   controller='grace.controllers.manage_regions_table'),
            UrlMap(name='delete-regions-ajax',
                   url='grace/manage-regions/delete',
                   controller='grace.ajax_controllers.region_delete'),

            UrlMap(name='add-geoserver',
                   url='grace/add-geoserver',
                   controller='grace.controllers.add_geoserver'),
            UrlMap(name='add-geoserver-ajax',
                   url='grace/add-geoserver/submit',
                   controller='grace.ajax_controllers.geoserver_add'),
            UrlMap(name='manage-geoservers',
                   url='grace/manage-geoservers',
                   controller='grace.controllers.manage_geoservers'),
            UrlMap(name='manage-geoservers-table',
                   url='grace/manage-geoservers/table',
                   controller='grace.controllers.manage_geoservers_table'),
            UrlMap(name='update-geoservers-ajax',
                   url='grace/manage-geoservers/submit',
                   controller='grace.ajax_controllers.geoserver_update'),
            UrlMap(name='delete-geoserver-ajax',
                   url='grace/manage-geoservers/delete',
                   controller='grace.ajax_controllers.geoserver_delete'),

            UrlMap(name='map',
                   url='grace/map',
                   controller='grace.controllers.map'),

            UrlMap(name='plot-region-tot',
                   url='grace/plot-region-tot',
                   controller='grace.ajax_controllers.plot_region_tot'),
            UrlMap(name='plot-region-sw',
                   url='grace/plot-region-sw',
                   controller='grace.ajax_controllers.plot_region_sw'),
            UrlMap(name='plot-region-soil',
                   url='grace/plot-region-soil',
                   controller='grace.ajax_controllers.plot_region_soil'),
            UrlMap(name='plot-region-gw',
                   url='grace/plot-region-gw',
                   controller='grace.ajax_controllers.plot_region_gw'),

            UrlMap(name='api_get_point_values',
                   url='grace/api/GetPointValues',
                   controller='grace.api.api_get_point_values'),
            UrlMap(name='upload-shp',
                   url='grace/upload-shp',
                   controller='grace.ajax_controllers.upload_shp'),
            UrlMap(name='global-map-sw',
                   url='grace/global-map/sw',
                   controller='grace.controllers.global_map_sw'),
            UrlMap(name='global-map-soil',
                   url='grace/global-map/soil',
                   controller='grace.controllers.global_map_soil'),
            UrlMap(name='global-map-gw',
                   url='grace/global-map/gw',
                   controller='grace.controllers.global_map_gw'),

            UrlMap(name='map-sw',
                   url='grace/map/sw',
                   controller='grace.controllers.map_sw'),
            UrlMap(name='map-soil',
                   url='grace/map/soil',
                   controller='grace.controllers.map_soil'),
            UrlMap(name='map-gw',
                   url='grace/map/gw',
                   controller='grace.controllers.map_gw'),
        )

        return url_maps


    def persistent_store_settings(self):

        ps_settings = (
            PersistentStoreDatabaseSetting(
                name='main_db',
                description='For storing Region and Geoserver metadata',
                required=True,
                initializer='grace.model.init_main_db',
                spatial=False,
            ),
        )

        return ps_settings
