while getopts d:f:t: flag
do
    case "${flag}" in
        d) directory=${OPTARG};;
        f) file=${OPTARG};;
        t) theme=${OPTARG};;
    esac
done

hackmyresume build resume-full.json TO $directory/$file.all --pdf phantom -t $theme
cp $directory/$file.html docs/index.html
node generate-pdf.js