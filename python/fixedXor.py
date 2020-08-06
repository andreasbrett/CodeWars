# https://www.codewars.com/kata/580f1220df91273ee90001e7

def fixed_xor(a, b):
    if (a == "") or (b == ""):
        return ""

    if len(a) > len(b):
        a = a[:len(b)]

    elif len(b) > len(a):
        b = b[:len(a)]

    return "{:02x}".format(int(a, 16) ^ int(b, 16)).zfill(len(a))[-len(a):]
