import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToProjectsSelectSchema } from '../inputTypeSchemas/PersonsToProjectsSelectSchema';
import { PersonsToProjectsIncludeSchema } from '../inputTypeSchemas/PersonsToProjectsIncludeSchema';

export const PersonsToProjectsArgsSchema: z.ZodType<Prisma.PersonsToProjectsDefaultArgs> = z.object({
  select: z.lazy(() => PersonsToProjectsSelectSchema).optional(),
  include: z.lazy(() => PersonsToProjectsIncludeSchema).optional(),
}).strict();

export default PersonsToProjectsArgsSchema;
