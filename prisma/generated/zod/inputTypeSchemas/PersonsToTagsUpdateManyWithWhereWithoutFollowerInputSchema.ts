import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToTagsScalarWhereInputSchema } from './PersonsToTagsScalarWhereInputSchema';
import { PersonsToTagsUpdateManyMutationInputSchema } from './PersonsToTagsUpdateManyMutationInputSchema';
import { PersonsToTagsUncheckedUpdateManyWithoutFollowerInputSchema } from './PersonsToTagsUncheckedUpdateManyWithoutFollowerInputSchema';

export const PersonsToTagsUpdateManyWithWhereWithoutFollowerInputSchema: z.ZodType<Prisma.PersonsToTagsUpdateManyWithWhereWithoutFollowerInput> = z.object({
  where: z.lazy(() => PersonsToTagsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PersonsToTagsUpdateManyMutationInputSchema),z.lazy(() => PersonsToTagsUncheckedUpdateManyWithoutFollowerInputSchema) ]),
}).strict();

export default PersonsToTagsUpdateManyWithWhereWithoutFollowerInputSchema;
