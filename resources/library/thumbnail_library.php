<?php
    function createThumbnails($path_to_images, $path_to_thumbs, $new_width) {
        // open the directory
        $dir = opendir($path_to_images);

        // loop through it, looking for any/all JPG files:
        while (false !== ($file = readdir($dir))) {
            // parse path for the extension
            $orig_absolute_path = $path_to_images.$file;
            $thumb_absolute_path = $path_to_thumbs.$file;
            $info = pathinfo($orig_absolute_path);

            if (array_key_exists('extension', $info) && !file_exists($thumb_absolute_path)) {
//             if (array_key_exists('extension', $info)) {
                switch(strtolower($info['extension'])){
                    //Create new image from file
                    case 'png':
                        // load image and get image size
                        $img = ImageCreateFromPng($orig_absolute_path);
                        // get new image
                        $new_img = resize($img, $new_width);
                        // save thumbnail into a file
                        ImagePng($new_img, $thumb_absolute_path);

                        break;
                    case 'gif':
                        // load image and get image size
                        $img = ImageCreateFromGif($orig_absolute_path);
                        // get new image
                        $new_img = resize($img, $new_width);
                        // save thumbnail into a file
                        ImageGif($new_img, $thumb_absolute_path);

                        break;
                    case 'jpeg':
                    case 'pjpeg':
                    case 'jpg':
                        // load image and get image size
                        $img = ImageCreateFromJpeg($orig_absolute_path);
                        // get new image
                        $new_img = resize($img, $new_width);
                        // save thumbnail into a file
                        ImageJpeg($new_img, $thumb_absolute_path);

                        break;
                    default:
                        break;
                }
            }
        }
        // close the directory
        closedir( $dir );
    }

    function resize($img, $new_width)  {
        $width = ImageSX($img);
        $height = ImageSY($img);

        // calculate thumbnail size
        $new_height = floor($height * ($new_width / $width)); // abrunden

        // create a new temporary image
        $new_img = ImageCreateTrueColor($new_width, $new_height);

        // copy and resize old image into new image
        ImageCopyResized($new_img, $img, 0, 0, 0, 0, $new_width, $new_height, $width, $height);

        return $new_img;
    }
?>