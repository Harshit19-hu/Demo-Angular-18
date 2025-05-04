import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../core/services/data.service';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrl: './team-members.component.scss'
})
export class TeamMembersComponent implements OnInit  {
  selectedMembers: number[] = [];
  selectAll: boolean = false;
  apiData: any = [];
  isDialogVisible: boolean = false;
  editDialog: boolean = false;
  currentMember:any;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      (res) => {
        console.log('API Response:', res);
        
        this.apiData = res;
      },
      (err) => {
        console.error('Error fetching data:', err);
      }
    );
  }

  toggleSelectAll(): void {
    this.selectAll = !this.selectAll;
    
    if (this.selectAll) {
      this.selectedMembers = this.apiData.grid_data.map((member: { id: any; }) => member.id);
    } else {
      this.selectedMembers = [];
    }
  }

  toggleMemberSelection(id: number): void {
    const index = this.selectedMembers.indexOf(id);
    
    if (index === -1) {
      this.selectedMembers.push(id);
    } else {
      this.selectedMembers.splice(index, 1);
    }
    this.selectAll = this.selectedMembers.length === this.apiData.grid_data.length;
  }

  isMemberSelected(id: number): boolean {
    return this.selectedMembers.includes(id);
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map(n => n[0])
      .join('');
  }

  deleteTeamMember(id: number): void {
    this.apiData.grid_data = this.apiData.grid_data.filter((member: { id: number; }) => member.id !== id);
    const index = this.selectedMembers.indexOf(id);
    if (index !== -1) {
      this.selectedMembers.splice(index, 1);
    }
  }

  editTeamMember(member:any): void {
    this.currentMember = member;
    this.editDialog = true
  }
  toggleEditDialog(){
    this.editDialog = !this.editDialog
  }
  toggleConfirmDialog() {
    this.isDialogVisible = !this.isDialogVisible;
  }
  openDeletDialog(member:any){
    this.isDialogVisible = true;
    this.currentMember = member;
  }
  confirmDelete() {
    this.toggleConfirmDialog();
    this.deleteTeamMember(this.currentMember.id)
  }
}
