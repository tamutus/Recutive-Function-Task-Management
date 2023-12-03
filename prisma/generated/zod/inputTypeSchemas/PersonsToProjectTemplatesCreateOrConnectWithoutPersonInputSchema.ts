import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToProjectTemplatesWhereUniqueInputSchema } from './PersonsToProjectTemplatesWhereUniqueInputSchema';
import { PersonsToProjectTemplatesCreateWithoutPersonInputSchema } from './PersonsToProjectTemplatesCreateWithoutPersonInputSchema';
import { PersonsToProjectTemplatesUncheckedCreateWithoutPersonInputSchema } from './PersonsToProjectTemplatesUncheckedCreateWithoutPersonInputSchema';

export const PersonsToProjectTemplatesCreateOrConnectWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesCreateOrConnectWithoutPersonInput> = z.object({
  where: z.lazy(() => PersonsToProjectTemplatesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonsToProjectTemplatesCreateWithoutPersonInputSchema),z.lazy(() => PersonsToProjectTemplatesUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export default PersonsToProjectTemplatesCreateOrConnectWithoutPersonInputSchema;
