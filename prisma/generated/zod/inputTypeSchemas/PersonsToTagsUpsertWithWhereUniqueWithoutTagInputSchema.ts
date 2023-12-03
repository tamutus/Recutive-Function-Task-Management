import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToTagsWhereUniqueInputSchema } from './PersonsToTagsWhereUniqueInputSchema';
import { PersonsToTagsUpdateWithoutTagInputSchema } from './PersonsToTagsUpdateWithoutTagInputSchema';
import { PersonsToTagsUncheckedUpdateWithoutTagInputSchema } from './PersonsToTagsUncheckedUpdateWithoutTagInputSchema';
import { PersonsToTagsCreateWithoutTagInputSchema } from './PersonsToTagsCreateWithoutTagInputSchema';
import { PersonsToTagsUncheckedCreateWithoutTagInputSchema } from './PersonsToTagsUncheckedCreateWithoutTagInputSchema';

export const PersonsToTagsUpsertWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.PersonsToTagsUpsertWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => PersonsToTagsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PersonsToTagsUpdateWithoutTagInputSchema),z.lazy(() => PersonsToTagsUncheckedUpdateWithoutTagInputSchema) ]),
  create: z.union([ z.lazy(() => PersonsToTagsCreateWithoutTagInputSchema),z.lazy(() => PersonsToTagsUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default PersonsToTagsUpsertWithWhereUniqueWithoutTagInputSchema;
