import os
from .app import Grace as app

app_workspace = app.get_app_workspace()
app_wksp_path = os.path.join(app_workspace.path,'')
BASE_PATH = app_wksp_path+'gracedata/'

GRACE_NETCDF_DIR = BASE_PATH + 'tot_/'
GLOBAL_NETCDF_DIR = BASE_PATH + 'tot_/global/'

TOTAL_NETCDF_DIR = BASE_PATH + 'tot_/'
TOTAL_GLOBAL_NETCDF_DIR = BASE_PATH + 'tot_/global/'


SW_NETCDF_DIR = BASE_PATH + 'sw_/'
SW_GLOBAL_NETCDF_DIR = BASE_PATH + 'sw_/global/'


SOIL_NETCDF_DIR = BASE_PATH + 'soil_/'
SOIL_GLOBAL_NETCDF_DIR = BASE_PATH + 'soil_/global/'


GW_NETCDF_DIR = BASE_PATH + 'gw_/'
GW_GLOBAL_NETCDF_DIR = BASE_PATH + 'gw_/global/'

SHAPE_DIR = BASE_PATH + 'shape/'
