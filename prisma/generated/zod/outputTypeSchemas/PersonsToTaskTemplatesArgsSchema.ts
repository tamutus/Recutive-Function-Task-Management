import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToTaskTemplatesSelectSchema } from '../inputTypeSchemas/PersonsToTaskTemplatesSelectSchema';
import { PersonsToTaskTemplatesIncludeSchema } from '../inputTypeSchemas/PersonsToTaskTemplatesIncludeSchema';

export const PersonsToTaskTemplatesArgsSchema: z.ZodType<Prisma.PersonsToTaskTemplatesDefaultArgs> = z.object({
  select: z.lazy(() => PersonsToTaskTemplatesSelectSchema).optional(),
  include: z.lazy(() => PersonsToTaskTemplatesIncludeSchema).optional(),
}).strict();

export default PersonsToTaskTemplatesArgsSchema;
