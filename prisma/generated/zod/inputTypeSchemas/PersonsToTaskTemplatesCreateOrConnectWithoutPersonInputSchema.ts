import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToTaskTemplatesWhereUniqueInputSchema } from './PersonsToTaskTemplatesWhereUniqueInputSchema';
import { PersonsToTaskTemplatesCreateWithoutPersonInputSchema } from './PersonsToTaskTemplatesCreateWithoutPersonInputSchema';
import { PersonsToTaskTemplatesUncheckedCreateWithoutPersonInputSchema } from './PersonsToTaskTemplatesUncheckedCreateWithoutPersonInputSchema';

export const PersonsToTaskTemplatesCreateOrConnectWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesCreateOrConnectWithoutPersonInput> = z.object({
  where: z.lazy(() => PersonsToTaskTemplatesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonsToTaskTemplatesCreateWithoutPersonInputSchema),z.lazy(() => PersonsToTaskTemplatesUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export default PersonsToTaskTemplatesCreateOrConnectWithoutPersonInputSchema;
