import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonUpdateWithoutTaskTagsInputSchema } from './PersonUpdateWithoutTaskTagsInputSchema';
import { PersonUncheckedUpdateWithoutTaskTagsInputSchema } from './PersonUncheckedUpdateWithoutTaskTagsInputSchema';
import { PersonCreateWithoutTaskTagsInputSchema } from './PersonCreateWithoutTaskTagsInputSchema';
import { PersonUncheckedCreateWithoutTaskTagsInputSchema } from './PersonUncheckedCreateWithoutTaskTagsInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const PersonUpsertWithoutTaskTagsInputSchema: z.ZodType<Prisma.PersonUpsertWithoutTaskTagsInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutTaskTagsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutTaskTagsInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutTaskTagsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutTaskTagsInputSchema) ]),
  where: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export default PersonUpsertWithoutTaskTagsInputSchema;
