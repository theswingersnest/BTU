from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import UserWallet
from django.http import JsonResponse, HttpResponseForbidden
from django.views.decorators.csrf import csrf_exempt
import json
import os

@login_required
def user_wallets(request):
    wallets = UserWallet.objects.filter(user=request.user)
    return render(request, 'wallets/user_wallets.html', {'wallets': wallets})

@csrf_exempt
def blockcypher_webhook(request):
    # Retrieve allowed IPs from environment variable, default to localhost
    allowed_ips = os.environ.get('BLOCKCYPHER_ALLOWED_IPS', '127.0.0.1').split(',')
    
    # Get client IP, considering proxies
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0].strip()
    else:
        ip = request.META.get('REMOTE_ADDR')
        
    # Reject unknown IPs
    if ip not in allowed_ips:
        return HttpResponseForbidden("Forbidden: Unknown IP")
    
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            # TODO: Process the webhook payload (e.g. confirm transaction)
            return JsonResponse({'status': 'success'})
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
            
    return JsonResponse({'error': 'Invalid method'}, status=405)