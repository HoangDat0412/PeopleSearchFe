<script setup>
import { useShowStore } from '@/stores/show';
import { mdiFormSelect } from '@mdi/js';
const show = useShowStore();
</script>

<template>
    <v-dialog v-model="show.showFormSearch" width="auto">
        <v-card >
            <v-card-text>
                <p class="text-h6 mb-6 mt-2 d-flex align-center"> <span class="me-2">
                        <v-icon color="success" style="font-size: 22px;" :icon="mdiFormSelect"></v-icon>
                    </span> Search Information</p>
                <v-row dense>
                    <v-col cols="12" md="4" sm="6">
                        <v-text-field  label="Full Name" variant="solo"
                            ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4" sm="6">
                        <v-text-field  label="Age"  variant="solo"
                            ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4" sm="6">
                        <v-text-field  label="IP"  variant="solo"
                            ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4" sm="6">
                        <v-text-field  label="Email"  variant="solo"
                            ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4" sm="6">
                        <v-text-field  label="CCCD/Passport"  variant="solo"
                            ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4" sm="6">
                        <v-text-field  label="Phone"  variant="solo"
                            ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-text-field  label="MST"  variant="solo"
                            ></v-text-field>
                    </v-col>

                    <v-col cols="12"  sm="6">
                        <v-text-field  label="Link Facebook"  variant="solo"
                            ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <v-select :items="['Male', 'Femail']" label="Gender" variant="solo"></v-select>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <v-text-field  label="Address"  variant="solo"
                            ></v-text-field>
                    </v-col>
                </v-row>

                <small class="text-caption text-medium-emphasis">*indicates required field</small>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text="Close" variant="plain" @click="show.showFormSearch = false"></v-btn>
                <v-btn color="primary" text="Search" variant="tonal" @click="show.showFormSearch = false"></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>