import re
import subprocess

html_path = "/Users/alex/Documents/GitHub/LandingPage/Rejuvaknee/index.html"

with open(html_path, "r", encoding="utf-8") as f:
    content = f.read()

print(f"Loaded {len(content)} chars from index.html")

# ============================================================
# STEP 1: Replace remote URLs with local paths
# ============================================================
url_replacements = [
    ("https://img.funnelish.com/5781/120764/1709297701-GGUiwLVbMAEhNGu.jpeg", "assets/images/1709297701-GGUiwLVbMAEhNGu.jpeg"),
    ("https://assets.checkoutchamp.com/Funnel/assets/images/fadfad32-3aee-484f-859c-b3ac63a4a1f3/205d922e-a636-4cf9-be7b-f43474977533/1672158092-11__1_.jpg?versionId=X0.7edKwrfm5uLxswRiiShKNBjdEeLm5", "assets/images/1672158092-11__1_.webp"),
    ("https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1721758140524_1718019286_facebook_1_.webp", "assets/images/1721758140524_1718019286_facebook_1_.webp"),
    ("https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1721758144701_1718019798_twitter.webp", "assets/images/1721758144701_1718019798_twitter.webp"),
    ("https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1721758152899_1718019823_pinterest.webp", "assets/images/1721758152899_1718019823_pinterest.webp"),
    ("https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1721758158481_1718019828_whatsapp.webp", "assets/images/1721758158481_1718019828_whatsapp.webp"),
    ("https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1721758167287_1718019947_envelope.webp", "assets/images/1721758167287_1718019947_envelope.webp"),
    ("https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093038452_1.jpg", "assets/images/1718093038452_1.jpg"),
    ("https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093042651_2.jpg", "assets/images/1718093042651_2.jpg"),
    ("https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093087867_9_1.webp", "assets/images/1718093087867_9_1.webp"),
    ("https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093096012_4.jpg", "assets/images/1718093096012_4.jpg"),
    ("https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093099824_5.jpg", "assets/images/1718093099824_5.jpg"),
    ("https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093104797_11_1_e6e55863_e013_422e_9e25_afa449269b8a.webp", "assets/images/1718093104797_11_1_e6e55863_e013_422e_9e25_afa449269b8a.webp"),
    ("https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093167379_Untitled.png", "assets/images/1718093167379_Untitled.png"),
    ("https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093225966_7.jpg", "assets/images/1718093225966_7.jpg"),
    ("https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093229397_8.jpg", "assets/images/1718093229397_8.jpg"),
    ("https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093234312_9.jpg", "assets/images/1718093234312_9.jpg"),
    ("https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093239988_1_1.webp", "assets/images/1718093239988_1_1.webp"),
    ("https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093246960_2_1.webp", "assets/images/1718093246960_2_1.webp"),
    ("https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093251639_4_1.webp", "assets/images/1718093251639_4_1.webp"),
    ("https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093257913_13.jpg", "assets/images/1718093257913_13.jpg"),
    ("https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093474847_3_1.webp", "assets/images/1718093474847_3_1.webp"),
    ("https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093481587_5_1.webp", "assets/images/1718093481587_5_1.webp"),
    ("https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093487111_16.jpg", "assets/images/1718093487111_16.jpg"),
    ("https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093490953_6_1.webp", "assets/images/1718093490953_6_1.webp"),
    ("https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093496696_18.webp", "assets/images/1718093496696_18.webp"),
    ("https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093500518_19.jpg", "assets/images/1718093500518_19.jpg"),
    ("https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093505882_20.jpg", "assets/images/1718093505882_20.jpg"),
    ("https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093546317_21.jpg", "assets/images/1718093546317_21.jpg"),
    ("https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093549500_6_1.webp", "assets/images/1718093549500_6_1.webp"),
    ("https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093552297_7_1.webp", "assets/images/1718093552297_7_1.webp"),
    ("https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093555602_8_1.webp", "assets/images/1718093555602_8_1.webp"),
    ("https://assets.checkoutchamp.com/9a5e120a-1691-48bb-b293-c4ce9d739240/1762527560600_Two_Paths.jpg", "assets/images/1762527560600_Two_Paths.webp"),
    ("https://assets.checkoutchamp.com/9a5e120a-1691-48bb-b293-c4ce9d739240/1762528806512_Guranttee.jpg", "assets/images/1762528806512_Guranttee.webp"),
    ("https://assets.checkoutchamp.com/9a5e120a-1691-48bb-b293-c4ce9d739240/1762530384909_Dr_in_confrence.jpg", "assets/images/1762530384909_Dr_in_confrence.webp"),
    ("https://assets.checkoutchamp.com/9a5e120a-1691-48bb-b293-c4ce9d739240/1762530538654_Product_in_action_image.jpg", "assets/images/1762530538654_Product_in_action_image.webp"),
    ("https://assets.checkoutchamp.com/9a5e120a-1691-48bb-b293-c4ce9d739240/1762531042629_1760433600406_imgi_28_1726558204057_03.png", "assets/images/1762531042629_1760433600406_imgi_28_1726558204057_03.webp"),
    ("https://assets.checkoutchamp.com/9a5e120a-1691-48bb-b293-c4ce9d739240/1762531073177_1760523534607_eh_.jpg", "assets/images/1762531073177_1760523534607_eh_.webp"),
    ("https://assets.checkoutchamp.com/9a5e120a-1691-48bb-b293-c4ce9d739240/1762531103330_1760523607122_IMG_0667.jpeg", "assets/images/1762531103330_1760523607122_IMG_0667.webp"),
    ("https://assets.checkoutchamp.com/9a5e120a-1691-48bb-b293-c4ce9d739240/1762531153109_1760523620070_IMG_1863.jpg", "assets/images/1762531153109_1760523620070_IMG_1863.webp"),
    ("https://assets.checkoutchamp.com/9a5e120a-1691-48bb-b293-c4ce9d739240/1762531273375_1760523630602_Rejuvaknee_holding_box_version_2.jpg", "assets/images/1762531273375_1760523630602_Rejuvaknee_holding_box_version_2.webp"),
    ("https://assets.checkoutchamp.com/9a5e120a-1691-48bb-b293-c4ce9d739240/1762531699819_1761210576646_imgi_7_1741801490061_ezgif.com_webp_to_png_converter_25_.png", "assets/images/1762531699819_1761210576646_imgi_7_1741801490061_ezgif.com_webp_to_png_converter_25_.webp"),
    ("https://assets.checkoutchamp.com/9a5e120a-1691-48bb-b293-c4ce9d739240/1762531775417_1761210462357_imgi_8_1741782436532_1736770581948_1726492251345_1706025492_happy_customers.png", "assets/images/1762531775417_1761210462357_imgi_8_1741782436532_1736770581948_1726492251345_1706025492_happy_customers.webp"),
    ("https://assets.checkoutchamp.com/9a5e120a-1691-48bb-b293-c4ce9d739240/1762532116394_1760436920971_imgi_47_1741799759714_ezgif.com_webp_to_png_converter_19_.png", "assets/images/1762532116394_1760436920971_imgi_47_1741799759714_ezgif.com_webp_to_png_converter_19_.webp"),
    ("https://assets.checkoutchamp.com/9a5e120a-1691-48bb-b293-c4ce9d739240/1762532530054_1760436999032_imgi_29_1741801661257_ezgif.com_webp_to_png_converter_27_.png", "assets/images/1762532530054_1760436999032_imgi_29_1741801661257_ezgif.com_webp_to_png_converter_27_.webp"),
    ("https://assets.checkoutchamp.com/c447ed90-8a36-11ef-89e2-d13bd87ed3a9/1762535768107_Studies.jpg", "assets/images/1762535768107_Studies.webp"),
    ("https://assets.checkoutchamp.com/2063057d-3197-4efe-8754-9518f1de0239/1767144640052_05.jpg", "assets/images/1767144640052_05.webp"),
    ("https://cdn.shopify.com/videos/c/o/v/fdedef61de214810b22915271c3862c0.mp4", "assets/videos/fdedef61de214810b22915271c3862c0.mp4"),
    ("https://cdn.shopify.com/videos/c/o/v/a1aaf1a9a1194828a13de903798beb9d.mp4", "assets/videos/a1aaf1a9a1194828a13de903798beb9d.mp4"),
    ("https://cdn.shopify.com/videos/c/o/v/db692a4e6eea473f95f6b24c8ce1a58f.mp4", "assets/videos/db692a4e6eea473f95f6b24c8ce1a58f.mp4"),
    ("https://cdn.shopify.com/videos/c/o/v/fd7fe9359d72405abf7791423535aa88.mp4", "assets/videos/fd7fe9359d72405abf7791423535aa88.mp4"),
    ("https://cdn.shopify.com/videos/c/o/v/562ae022a04646cfa88315ca43475429.mp4", "assets/videos/562ae022a04646cfa88315ca43475429.mp4"),
    ("https://cdn.shopify.com/videos/c/o/v/4e3e25880bab4914a2357717083e29b9.mp4", "assets/videos/4e3e25880bab4914a2357717083e29b9.mp4"),
    ("https://cdn.shopify.com/videos/c/o/v/f7cb4a2dc9b24346a10a2bdec167c194.mp4", "assets/videos/f7cb4a2dc9b24346a10a2bdec167c194.mp4"),
    ("https://cdn.shopify.com/videos/c/o/v/a46adad2a0294151afd0d3f5384e1942.mp4", "assets/videos/a46adad2a0294151afd0d3f5384e1942.mp4"),
]

url_count = 0
miss_count = 0
for remote, local in url_replacements:
    n = content.count(remote)
    if n > 0:
        content = content.replace(remote, local)
        url_count += n
    else:
        miss_count += 1
        print(f"  MISS: {remote.split('/')[-1][:60]}")

print(f"Step 1 done: {url_count} URL occurrences replaced, {miss_count} missed")

# ============================================================
# STEP 2: Font size scaling for elderly users (inside CSS only)
# Targets: minimum 16px for body text, generous scaling throughout
# ============================================================
font_scale = {
    12: 16,
    13: 17,
    14: 18,
    15: 18,
    16: 19,
    18: 21,
    20: 23,
    24: 27,
    26: 29,
    36: 39,
    38: 42,
}

def scale_font_size(m):
    px = int(m.group(1))
    new_px = font_scale.get(px, px)
    return f'font-size: {new_px}px'

font_count = len(re.findall(r'font-size:\s*\d+px', content))
content = re.sub(r'font-size:\s*(\d+)px', scale_font_size, content)
print(f"Step 2 done: scaled {font_count} font-size declarations")

# ============================================================
# STEP 3: Line-height normalization to 1.6x per font size
# Only the tight ones that hurt readability for elderly
# ============================================================
lh_map = {
    '12px':   '26px',   # was 1.0x of 12px  -> 1.6x of 16px
    '14.3px': '29px',   # was 0.95x of 15px -> 1.6x of 18px
    '16px':   '30px',   # was 1.0x of 16px  -> 1.6x of 19px
    '16.9px': '27px',   # was 1.3x of 13px  -> 1.6x of 17px
    '18px':   '34px',   # was 1.0x of 18px  -> 1.6x of 21px
    '20.8px': '30px',   # was 1.3x of 16px  -> 1.6x of 19px
    '22.4px': '30px',   # was 1.4x of 16px  -> 1.6x of 19px
    '24px':   '43px',   # was 1.0x of 24px  -> 1.6x of 27px
    '25.2px': '34px',   # was 1.4x of 18px  -> 1.6x of 21px
    '28px':   '37px',   # was 1.4x of 20px  -> 1.6x of 23px
    '33.6px': '43px',   # was 1.4x of 24px  -> 1.6x of 27px
    '50.2px': '67px',   # was 1.32x of 38px -> 1.6x of 42px
}

def scale_lh(m):
    val = m.group(1)
    return f'line-height: {lh_map.get(val, val)}'

lh_count = len(re.findall(r'line-height:\s*[\d.]+px', content))
content = re.sub(r'line-height:\s*([\d.]+px)', scale_lh, content)
print(f"Step 3 done: processed {lh_count} line-height declarations")

# Relative line-height: bump 1.5 -> 1.7
content = content.replace('line-height: 1.5;', 'line-height: 1.7;')

# ============================================================
# STEP 4: font-weight 400 -> 500 for better stroke legibility
# ============================================================
fw_count = content.count('font-weight: 400;')
content = content.replace('font-weight: 400;', 'font-weight: 500;')
# Non-standard 450 -> 500
content = content.replace('font-weight: 450;', 'font-weight: 500;')
print(f"Step 4 done: bumped {fw_count} font-weight 400->500 declarations")

with open(html_path, "w", encoding="utf-8") as f:
    f.write(content)

print("\nFile saved successfully!")

# Verification
r = subprocess.run(['grep', '-c', 'assets.checkoutchamp.com', html_path], capture_output=True, text=True)
print(f"Remaining checkoutchamp.com URLs: {r.stdout.strip()}")
r2 = subprocess.run(['grep', '-c', 'cdn.shopify.com', html_path], capture_output=True, text=True)
print(f"Remaining cdn.shopify.com URLs:   {r2.stdout.strip()}")
r3 = subprocess.run(['grep', '-c', 'img.funnelish.com', html_path], capture_output=True, text=True)
print(f"Remaining img.funnelish.com URLs: {r3.stdout.strip()}")
