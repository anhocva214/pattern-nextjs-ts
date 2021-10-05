import os
from datetime import datetime
import shutil


now = datetime.now()
# date_time = now.strftime("%m/%d/%Y, %H:%M:%S")

msg = input("Enter message: ")

os.system("git add .")
os.system("""git commit -m " """+msg+""" " """)
os.system("git push origin main")