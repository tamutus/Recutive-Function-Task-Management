import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagUpdateWithoutProjectTemplatesInputSchema } from './TagUpdateWithoutProjectTemplatesInputSchema';
import { TagUncheckedUpdateWithoutProjectTemplatesInputSchema } from './TagUncheckedUpdateWithoutProjectTemplatesInputSchema';
import { TagCreateWithoutProjectTemplatesInputSchema } from './TagCreateWithoutProjectTemplatesInputSchema';
import { TagUncheckedCreateWithoutProjectTemplatesInputSchema } from './TagUncheckedCreateWithoutProjectTemplatesInputSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';

export const TagUpsertWithoutProjectTemplatesInputSchema: z.ZodType<Prisma.TagUpsertWithoutProjectTemplatesInput> = z.object({
  update: z.union([ z.lazy(() => TagUpdateWithoutProjectTemplatesInputSchema),z.lazy(() => TagUncheckedUpdateWithoutProjectTemplatesInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutProjectTemplatesInputSchema),z.lazy(() => TagUncheckedCreateWithoutProjectTemplatesInputSchema) ]),
  where: z.lazy(() => TagWhereInputSchema).optional()
}).strict();

export default TagUpsertWithoutProjectTemplatesInputSchema;
