import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagUpdateWithoutProjectsInputSchema } from './TagUpdateWithoutProjectsInputSchema';
import { TagUncheckedUpdateWithoutProjectsInputSchema } from './TagUncheckedUpdateWithoutProjectsInputSchema';
import { TagCreateWithoutProjectsInputSchema } from './TagCreateWithoutProjectsInputSchema';
import { TagUncheckedCreateWithoutProjectsInputSchema } from './TagUncheckedCreateWithoutProjectsInputSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';

export const TagUpsertWithoutProjectsInputSchema: z.ZodType<Prisma.TagUpsertWithoutProjectsInput> = z.object({
  update: z.union([ z.lazy(() => TagUpdateWithoutProjectsInputSchema),z.lazy(() => TagUncheckedUpdateWithoutProjectsInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutProjectsInputSchema),z.lazy(() => TagUncheckedCreateWithoutProjectsInputSchema) ]),
  where: z.lazy(() => TagWhereInputSchema).optional()
}).strict();

export default TagUpsertWithoutProjectsInputSchema;
