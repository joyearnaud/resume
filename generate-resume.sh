while getopts d:f:t: flag
do
    case "${flag}" in
        d) directory=${OPTARG};;
        f) file=${OPTARG};;
        t) theme=${OPTARG};;
    esac
done

hackmyresume build $file TO $directory/resume.html -t $theme
hackmyresume build $file TO $directory/resume.md -t $theme
hackmyresume build $file TO $directory/resume.png -t $theme
cp $directory/resume.html docs/index.html
node generate-pdf.js