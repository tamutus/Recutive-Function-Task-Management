import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToTagsWhereUniqueInputSchema } from './PersonsToTagsWhereUniqueInputSchema';
import { PersonsToTagsUpdateWithoutFollowerInputSchema } from './PersonsToTagsUpdateWithoutFollowerInputSchema';
import { PersonsToTagsUncheckedUpdateWithoutFollowerInputSchema } from './PersonsToTagsUncheckedUpdateWithoutFollowerInputSchema';

export const PersonsToTagsUpdateWithWhereUniqueWithoutFollowerInputSchema: z.ZodType<Prisma.PersonsToTagsUpdateWithWhereUniqueWithoutFollowerInput> = z.object({
  where: z.lazy(() => PersonsToTagsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PersonsToTagsUpdateWithoutFollowerInputSchema),z.lazy(() => PersonsToTagsUncheckedUpdateWithoutFollowerInputSchema) ]),
}).strict();

export default PersonsToTagsUpdateWithWhereUniqueWithoutFollowerInputSchema;
