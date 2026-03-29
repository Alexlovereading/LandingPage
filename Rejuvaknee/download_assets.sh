#!/bin/bash
set -e

IMGS_DIR="/Users/alex/Documents/GitHub/LandingPage/Rejuvaknee/assets/images"
VIDS_DIR="/Users/alex/Documents/GitHub/LandingPage/Rejuvaknee/assets/videos"

mkdir -p "$IMGS_DIR" "$VIDS_DIR"

download_image() {
  local url="$1"
  local filename
  filename=$(basename "${url%%\?*}")
  echo "Downloading image: $filename"
  curl -sL --retry 2 --max-time 60 -o "$IMGS_DIR/$filename" "$url"
  echo "Done: $filename"
}

download_video() {
  local url="$1"
  local filename
  filename=$(basename "${url%% *}")
  echo "Downloading video: $filename"
  curl -sL --retry 2 --max-time 120 -o "$VIDS_DIR/$filename" "$url"
  echo "Done: $filename"
}

# Images
download_image "https://img.funnelish.com/5781/120764/1709297701-GGUiwLVbMAEhNGu.jpeg"
download_image "https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093038452_1.jpg"
download_image "https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093042651_2.jpg"
download_image "https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093087867_9_1.webp"
download_image "https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093096012_4.jpg"
download_image "https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093099824_5.jpg"
download_image "https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093104797_11_1_e6e55863_e013_422e_9e25_afa449269b8a.webp"
download_image "https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093167379_Untitled.png"
download_image "https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093225966_7.jpg"
download_image "https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093229397_8.jpg"
download_image "https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093234312_9.jpg"
download_image "https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093239988_1_1.webp"
download_image "https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093246960_2_1.webp"
download_image "https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093251639_4_1.webp"
download_image "https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093257913_13.jpg"
download_image "https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093474847_3_1.webp"
download_image "https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093481587_5_1.webp"
download_image "https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093487111_16.jpg"
download_image "https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093490953_6_1.webp"
download_image "https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093496696_18.webp"
download_image "https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093500518_19.jpg"
download_image "https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093505882_20.jpg"
download_image "https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093546317_21.jpg"
download_image "https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093549500_6_1.webp"
download_image "https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093552297_7_1.webp"
download_image "https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1718093555602_8_1.webp"
download_image "https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1721758140524_1718019286_facebook_1_.webp"
download_image "https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1721758144701_1718019798_twitter.webp"
download_image "https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1721758152899_1718019823_pinterest.webp"
download_image "https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1721758158481_1718019828_whatsapp.webp"
download_image "https://assets.checkoutchamp.com/cde7d290-1b8f-11ef-b511-db9a63554a81/1721758167287_1718019947_envelope.webp"
download_image "https://assets.checkoutchamp.com/9a5e120a-1691-48bb-b293-c4ce9d739240/1762527560600_Two_Paths.jpg"
download_image "https://assets.checkoutchamp.com/9a5e120a-1691-48bb-b293-c4ce9d739240/1762528806512_Guranttee.jpg"
download_image "https://assets.checkoutchamp.com/9a5e120a-1691-48bb-b293-c4ce9d739240/1762530384909_Dr_in_confrence.jpg"
download_image "https://assets.checkoutchamp.com/9a5e120a-1691-48bb-b293-c4ce9d739240/1762530538654_Product_in_action_image.jpg"
download_image "https://assets.checkoutchamp.com/9a5e120a-1691-48bb-b293-c4ce9d739240/1762531042629_1760433600406_imgi_28_1726558204057_03.png"
download_image "https://assets.checkoutchamp.com/9a5e120a-1691-48bb-b293-c4ce9d739240/1762531073177_1760523534607_eh_.jpg"
download_image "https://assets.checkoutchamp.com/9a5e120a-1691-48bb-b293-c4ce9d739240/1762531103330_1760523607122_IMG_0667.jpeg"
download_image "https://assets.checkoutchamp.com/9a5e120a-1691-48bb-b293-c4ce9d739240/1762531153109_1760523620070_IMG_1863.jpg"
download_image "https://assets.checkoutchamp.com/9a5e120a-1691-48bb-b293-c4ce9d739240/1762531273375_1760523630602_Rejuvaknee_holding_box_version_2.jpg"
download_image "https://assets.checkoutchamp.com/9a5e120a-1691-48bb-b293-c4ce9d739240/1762531699819_1761210576646_imgi_7_1741801490061_ezgif.com_webp_to_png_converter_25_.png"
download_image "https://assets.checkoutchamp.com/9a5e120a-1691-48bb-b293-c4ce9d739240/1762531775417_1761210462357_imgi_8_1741782436532_1736770581948_1726492251345_1706025492_happy_customers.png"
download_image "https://assets.checkoutchamp.com/9a5e120a-1691-48bb-b293-c4ce9d739240/1762532116394_1760436920971_imgi_47_1741799759714_ezgif.com_webp_to_png_converter_19_.png"
download_image "https://assets.checkoutchamp.com/9a5e120a-1691-48bb-b293-c4ce9d739240/1762532530054_1760436999032_imgi_29_1741801661257_ezgif.com_webp_to_png_converter_27_.png"
download_image "https://assets.checkoutchamp.com/c447ed90-8a36-11ef-89e2-d13bd87ed3a9/1762535768107_Studies.jpg"
download_image "https://assets.checkoutchamp.com/2063057d-3197-4efe-8754-9518f1de0239/1767144640052_05.jpg"
download_image "https://assets.checkoutchamp.com/Funnel/assets/images/fadfad32-3aee-484f-859c-b3ac63a4a1f3/205d922e-a636-4cf9-be7b-f43474977533/1672158092-11__1_.jpg"

# Videos
download_video "https://cdn.shopify.com/videos/c/o/v/fdedef61de214810b22915271c3862c0.mp4"
download_video "https://cdn.shopify.com/videos/c/o/v/a1aaf1a9a1194828a13de903798beb9d.mp4"
download_video "https://cdn.shopify.com/videos/c/o/v/db692a4e6eea473f95f6b24c8ce1a58f.mp4"
download_video "https://cdn.shopify.com/videos/c/o/v/fd7fe9359d72405abf7791423535aa88.mp4"
download_video "https://cdn.shopify.com/videos/c/o/v/562ae022a04646cfa88315ca43475429.mp4"
download_video "https://cdn.shopify.com/videos/c/o/v/4e3e25880bab4914a2357717083e29b9.mp4"
download_video "https://cdn.shopify.com/videos/c/o/v/f7cb4a2dc9b24346a10a2bdec167c194.mp4"
download_video "https://cdn.shopify.com/videos/c/o/v/a46adad2a0294151afd0d3f5384e1942.mp4"

echo "All downloads completed!"
