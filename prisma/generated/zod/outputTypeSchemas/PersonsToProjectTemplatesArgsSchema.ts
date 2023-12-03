import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToProjectTemplatesSelectSchema } from '../inputTypeSchemas/PersonsToProjectTemplatesSelectSchema';
import { PersonsToProjectTemplatesIncludeSchema } from '../inputTypeSchemas/PersonsToProjectTemplatesIncludeSchema';

export const PersonsToProjectTemplatesArgsSchema: z.ZodType<Prisma.PersonsToProjectTemplatesDefaultArgs> = z.object({
  select: z.lazy(() => PersonsToProjectTemplatesSelectSchema).optional(),
  include: z.lazy(() => PersonsToProjectTemplatesIncludeSchema).optional(),
}).strict();

export default PersonsToProjectTemplatesArgsSchema;
