# sudo
Nếu muốn dùng lệnh mà lại liên quan đến quyền admin thì thêm từ khóa sudo trước lệnh cần dùng

# Cac cau lenh co ban khi dùng Ubuntu
ls -> dùng để hiển thị các file con
ls -l -> dùng để hiển thị chi tiết các file con
ls -a -> dùng để hiển thị tất cả các file con và file ẩn
ls -la -> dùng để hiển thị chi tiết tất cả các file con và file ẩn
ls -R -> dùng để hiển thị các file cấp con trong folder
mkdir -> dùng để tạo folder con trong folder hiện tại
mkdir file_name/children/children -p -> dùng để tạo file nhiều cấp 
rmdir file_name -> dùng để xóa folder con có trong folder hiện tại
rm -r file_name -> dùng để xóa folder mà có chứa các folder con nhiều cấp
touch file_name -> dùng để tạo file trong folder hiện tại

# Vim trong ubuntu
vi file_name-> dùng để tạo file và chuyển sang chế độ Vim Editor
:q -> dùng để thoát Vim Editor
i -> dùng để insert dữ liệu vào file đã tạo bằng lệnh "vi file_name"
esc -> dùng để thoát chế độ hiện tại đang dùng trong Vim
Note : Nếu muốn chỉnh sửa dữ liệu trong file thì di chuyển nháy chuột đến chỗ cần sửa và nhấn "i"
:q! -> dùng để thoát Vim khi mà đã insert dữ liệu vào file
:w -> dùng để lưu file vừa tạo trong Vim
:x -> dùng để vừa lưu file vừa thoát Vim

# Cat, echo, tail, grep
cat file_names -> dùng để xem nội dùng các file 
cate file_names > file_name -> dùng để nối nội dùng của các file và gán cho file mới

echo text -> dùng để in văn bản ra terminal
echo text > file_name -> dùng để tạo file mới và gán văn bản kia cho nó 
Note: Giá trị trong file sẽ bị ghì đè nếu dùng echo cho file đã tạo
echo text >> file_name -> dùng để ghi vào sau nếu file đã tồn tại

tail file_name -> mặc định sẽ lấy ra nội dung 10 dòng cuối cùng
tail -n line_nums file_name -> lấy ra nội dùng số dòng mình muốn từ cuối lên
tail --help -> để xem các tham số đi cùng với tail
tail -f -> dùng để theo dõi một file và in ra nội dùng của file đó theo từng thời điểm

cat file_names | grep "findText"
or grep "findText" file_names -> dùng để tìm kiếm theo findText và in ra giá trị
grep "findText" * -> dùng để tìm kiếm trong tất cả các file có trong folder
grep -w "findText" file_names -> dùng để tìm kiếm không phải là một chuỗi con của một từ khác
grep -rw "findText" file_names -> cũng tìm kiếm giống -w nhưng nó chi tiết hơn biết được dòng nào của file nào có trong folder
grep -v "findText" file_names -> tìm kiếm ngược loại trừ tất cả các dòng có chứa "findText"
grep -x "findText" filee_names -> dùng để tìm kiếm chính xác các dòng có chứa "findText"

# cp, mv, rm, rmdir
cp origin_file copy_file -> dùng để copy nội dung file ra file mới
cp -r origin_folder new_folder -> dùng để copy folder
mv origin_file new_file -> dùng để di chuyển file nếu không di chuyển thì có thể dùng để đổi tên file VD: mv demo.html demo2.html đổi tển demo thành demo2
rm file_names -> dùng để xóa một hoặc nhiều hơn 1 file
rm -r folder_name -> dùng để xóa toàn bộ file trong foler và cả folder
rmdir folder_name -> chỉ xóa được file trống\

# sudo, chmod, chown
sudo -> khi thực thi các câu lệnh cần đến quyền admin
chmod -> dùng để phân quyền

# man, wget, apt
man command_name -> dùng để tra cứu tài liệu về lệnh nào đó VD: man tail 
wget link -> dùng để tải ứng dụng, ảnh, bài hát... qua đường link  VD: wget https:/nhaccuatui.com/chac-ai-do-se-ve/
apt option -> dùng để quản lí các gói 
option: install package VD: install nodejs. Khi gõ dòng lệnh này sẽ hiện ra một câu hỏi có chắc chắn muốn cài đặt không nếu muốn bỏ qua bước này chỉ cần thêm "-y" sau "install"
option: update package -> dùng để liệt kê các gói có sẵn để chuẩn bị cho bước upgrade
option: upgrade package -> dùng để nâng cấp lên phiên bản mới nhất của gói đó

# kill, ping, uname, passwd
kill option pID -> dùng để dừng một chương trình nào đó không phản hồi. Khi gõ lệnh "ps aux" sẽ hiện ra một bảng tiến trình giống với task management để ý sẽ thấy cột "pID"
ping link -> theo dõi ping của một web,app,... qua một đường link
uname -a -> dùng để xem thông tin phiên bản của hệ điều hành
passwd -> dùng để thay đổi mật khẩu cho user window

# top, df, free
top -> giống với lệnh "ps aux" nhưng chi tiết hơn (có thể dùng "htop" là một bản nâng cấp mới của top)
df -> hiện ra bảng thống kê ổ cứng
free -> hiện ra bảng thống kê về ram