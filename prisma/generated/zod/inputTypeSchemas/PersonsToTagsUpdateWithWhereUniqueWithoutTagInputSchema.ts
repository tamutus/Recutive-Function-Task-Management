import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToTagsWhereUniqueInputSchema } from './PersonsToTagsWhereUniqueInputSchema';
import { PersonsToTagsUpdateWithoutTagInputSchema } from './PersonsToTagsUpdateWithoutTagInputSchema';
import { PersonsToTagsUncheckedUpdateWithoutTagInputSchema } from './PersonsToTagsUncheckedUpdateWithoutTagInputSchema';

export const PersonsToTagsUpdateWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.PersonsToTagsUpdateWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => PersonsToTagsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PersonsToTagsUpdateWithoutTagInputSchema),z.lazy(() => PersonsToTagsUncheckedUpdateWithoutTagInputSchema) ]),
}).strict();

export default PersonsToTagsUpdateWithWhereUniqueWithoutTagInputSchema;
