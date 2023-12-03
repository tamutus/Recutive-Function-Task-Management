import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToTagsSelectSchema } from '../inputTypeSchemas/PersonsToTagsSelectSchema';
import { PersonsToTagsIncludeSchema } from '../inputTypeSchemas/PersonsToTagsIncludeSchema';

export const PersonsToTagsArgsSchema: z.ZodType<Prisma.PersonsToTagsDefaultArgs> = z.object({
  select: z.lazy(() => PersonsToTagsSelectSchema).optional(),
  include: z.lazy(() => PersonsToTagsIncludeSchema).optional(),
}).strict();

export default PersonsToTagsArgsSchema;
