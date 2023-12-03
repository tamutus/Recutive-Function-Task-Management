import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagWhereInputSchema } from './TagWhereInputSchema';
import { TagUpdateWithoutProjectsInputSchema } from './TagUpdateWithoutProjectsInputSchema';
import { TagUncheckedUpdateWithoutProjectsInputSchema } from './TagUncheckedUpdateWithoutProjectsInputSchema';

export const TagUpdateToOneWithWhereWithoutProjectsInputSchema: z.ZodType<Prisma.TagUpdateToOneWithWhereWithoutProjectsInput> = z.object({
  where: z.lazy(() => TagWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TagUpdateWithoutProjectsInputSchema),z.lazy(() => TagUncheckedUpdateWithoutProjectsInputSchema) ]),
}).strict();

export default TagUpdateToOneWithWhereWithoutProjectsInputSchema;
