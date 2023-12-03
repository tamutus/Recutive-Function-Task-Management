import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToProjectTemplatesWhereUniqueInputSchema } from './PersonsToProjectTemplatesWhereUniqueInputSchema';
import { PersonsToProjectTemplatesCreateWithoutProjectInputSchema } from './PersonsToProjectTemplatesCreateWithoutProjectInputSchema';
import { PersonsToProjectTemplatesUncheckedCreateWithoutProjectInputSchema } from './PersonsToProjectTemplatesUncheckedCreateWithoutProjectInputSchema';

export const PersonsToProjectTemplatesCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => PersonsToProjectTemplatesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonsToProjectTemplatesCreateWithoutProjectInputSchema),z.lazy(() => PersonsToProjectTemplatesUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default PersonsToProjectTemplatesCreateOrConnectWithoutProjectInputSchema;
