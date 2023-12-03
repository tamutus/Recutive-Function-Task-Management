import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonUpdateWithoutPrivateTagsInputSchema } from './PersonUpdateWithoutPrivateTagsInputSchema';
import { PersonUncheckedUpdateWithoutPrivateTagsInputSchema } from './PersonUncheckedUpdateWithoutPrivateTagsInputSchema';
import { PersonCreateWithoutPrivateTagsInputSchema } from './PersonCreateWithoutPrivateTagsInputSchema';
import { PersonUncheckedCreateWithoutPrivateTagsInputSchema } from './PersonUncheckedCreateWithoutPrivateTagsInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const PersonUpsertWithoutPrivateTagsInputSchema: z.ZodType<Prisma.PersonUpsertWithoutPrivateTagsInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutPrivateTagsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutPrivateTagsInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutPrivateTagsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutPrivateTagsInputSchema) ]),
  where: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export default PersonUpsertWithoutPrivateTagsInputSchema;
