import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToProjectsPersonIdProjectIdCompoundUniqueInputSchema: z.ZodType<Prisma.PersonsToProjectsPersonIdProjectIdCompoundUniqueInput> = z.object({
  personId: z.number(),
  projectId: z.number()
}).strict();

export default PersonsToProjectsPersonIdProjectIdCompoundUniqueInputSchema;
