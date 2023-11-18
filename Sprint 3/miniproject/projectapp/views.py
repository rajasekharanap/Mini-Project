from django.shortcuts import render
from django.http import HttpResponse

import joblib
model = joblib.load("./regressor.pkl")

def index(request):
    return render(request,'index.html')


def userinput(request):
    if request.method=='POST':
        item_weight=float(request.POST.get('item_weight'))
        item_fat_content = int(request.POST.get('item_fat_content'))
        item_visibility= float(request.POST.get('item_visibility'))
        item_type = int(request.POST.get('item_type'))
        item_mrp= float(request.POST.get('item_mrp'))
        outlet_establishment_year= float(request.POST.get('outlet_establishment_year'))
        outlet_size= int(request.POST.get('outlet_size'))
        outlet_location_type= int(request.POST.get('outlet_location_type'))
        outlet_type= int(request.POST.get('outlet_type'))
        inputlist=[item_weight,item_fat_content,item_visibility,item_type,item_mrp,outlet_establishment_year,
                   outlet_size,outlet_location_type,outlet_type]
        print(inputlist)
        prediction=model.predict([inputlist])
        dictionary={'value':prediction[0]}
        print(dictionary['value'])

        return render(request,'prediction.html',dictionary)
    return render(request,'userinput.html')


def predict(request):
    return render(request,'prediction.html')

