import { z } from 'zod';

export const PersonsToProjectsScalarFieldEnumSchema = z.enum(['personId','projectId','volunteerDate']);

export default PersonsToProjectsScalarFieldEnumSchema;
