import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonUpdateWithoutProjectTagsInputSchema } from './PersonUpdateWithoutProjectTagsInputSchema';
import { PersonUncheckedUpdateWithoutProjectTagsInputSchema } from './PersonUncheckedUpdateWithoutProjectTagsInputSchema';
import { PersonCreateWithoutProjectTagsInputSchema } from './PersonCreateWithoutProjectTagsInputSchema';
import { PersonUncheckedCreateWithoutProjectTagsInputSchema } from './PersonUncheckedCreateWithoutProjectTagsInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const PersonUpsertWithoutProjectTagsInputSchema: z.ZodType<Prisma.PersonUpsertWithoutProjectTagsInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutProjectTagsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutProjectTagsInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutProjectTagsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutProjectTagsInputSchema) ]),
  where: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export default PersonUpsertWithoutProjectTagsInputSchema;
