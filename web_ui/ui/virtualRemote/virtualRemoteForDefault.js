
function keyDownForRight()
{
	var temp = index;//������һ���������±�ֵ�������ָ�����
	index = index+1; //����ƶ����İ������±�
	
	//����������һ�������ϰ��Ҽ��Ļ����򷵻ص�һ��������
	if(index>18)
	{
		index = 0;
	}
	

	changeFocusCSS(index,temp);
	
	moveFocusXY(index);
	
	
	
}




function keyDownForLeft()
{
	var temp = index;//������һ���������±�ֵ�������ָ�����
	index = index-1; //����ƶ����İ������±�
	
	//������ڵ�һ������  ������Ļ��� 
	if(index<0)
	{
		index = 18;
	}
	

	changeFocusCSS(index,temp);
	
	moveFocusXY(index);
}

function keyDownForDown()
{
	var temp = index;//������һ���������±�ֵ�������ָ�����
	
	
	
	//����������һ�� ���¼���ʱ�򣬻ᳬ���߽磬�����ָ�����
	if(index>=15)
	{
	}
	else if(index == 8)
	{
		index = index + 1;
	}
	else if(index == 7||index == 9||index ==11||index == 12||index == 13)
	{
		index = index +2;
	}
	else
	{
		index = index+3; //����ƶ����İ������±�
	}
	
	
	
	changeFocusCSS(index,temp);
	
	moveFocusXY(index);
	
	
}

function keyDownForUp()
{
	
	var temp = index;//������һ���������±�ֵ�������ָ�����
	
	
	//������ڵ�һ�� ���ϼ���ʱ�򣬲�������
	if(index<=2)
	{
		
	}
	else if(index == 9||index == 11||index == 14||index == 15)
	{
		index = index -2;
	}
	else if(index == 10)
	{
		index = index -1;
	}
	else if(index == 18)
	{
		index = index -4;
	}
	else
	{
		index = index-3; //����ƶ����İ������±�
	}
	
	
	
	changeFocusCSS(index,temp);
	
	moveFocusXY(index);
	
	
}

//�ı佹�����ʽ
function changeFocusCSS(index,temp)
{
	
	//�ƶ����İ���  ���лָ�����-----�²㽹��-��ѡ
	document.getElementById(sign_id[temp]).setAttribute("class", sign_css_lower[temp]);
	
	//�ƶ����İ���   ���н��㴦��-----�²㽹��-ѡ��
	document.getElementById(sign_id[index]).setAttribute("class", sign_css_focus_lower[index]);
	
		
	
	//��index<15��ʱ��  ��������---�ϲ㽹��-ѡ��
	document.getElementById("focusForRemote").setAttribute("class", sign_css_focus_up[index]);
	
}

//�ƶ��ϲ㽹���λ�ã�---�ı��ϲ㽹�������
function moveFocusXY(index)
{
	//�ƶ�����---����ǵ�һ��������index = 0   ������ͨ�õĹ�ʽ�������⴦��
	if(index == 0)
	{
		document.getElementById("focusForRemote").style.left =sign_xy[0] +"px";
		document.getElementById("focusForRemote").style.top =sign_xy[0+1] +"px";
	}
	else
	{
		document.getElementById("focusForRemote").style.left =sign_xy[index*2] +"px";
		document.getElementById("focusForRemote").style.top =sign_xy[index*2+1] +"px";
	}
	
	refreshTime();
}

//ɾ��css����ʽ
function removeCssTemp()
{
	var lists = document.getElementById("virtualRemote").contentWindow.document.getElementsByTagName("link");
	for ( var i = 0; i < lists.length; i++) 
	{
		if (lists[i].getAttribute("href").indexOf("\.css") != -1) 
		{
			lists[i].parentNode.removeChild(lists[i]);
		}
	}
}

//�õ�û�в�����ʱ��
function getInoperationTime()
{
	var now = new Date().getTime();
	return now-time_Last;
}

//ˢ��ʱ��
function refreshTime()
{
	time_Last = new Date().getTime();
}


//�ָ�Ĭ�ϵ�״̬
function recoverDefaultState()
{
	//�ƶ����İ���  ���лָ�����-----�²㽹��-��ѡ
	document.getElementById(sign_id[index]).setAttribute("class", sign_css_lower[index]);
	
	index = 7;
	//��ʼ�� -- ���� �����css
  	changeFocusCSS(index,index);
	
  	//��ʼ�� -- ���ý��������
	moveFocusXY(index);
	
	
}
//---------------------------���֧��----------------------------

function WhenClick(id)
{
	//�ƶ����İ���  ���лָ�����-----�²㽹��-��ѡ
	document.getElementById(sign_id[index]).setAttribute("class", sign_css_lower[index]);
     
	 for(var i=0 ; i<sign_id.length;i++)
	 {  
		 if(sign_id[i] == id)
		 {    
			index = i;
		 }
	 }
	 
	 //��ʼ�� -- ���� �����css
	 changeFocusCSS(index,index);
		
	 //��ʼ�� -- ���ý��������
	 moveFocusXY(index);
     
}









































