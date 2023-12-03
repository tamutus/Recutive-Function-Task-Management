import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToProjectsCreateWithoutProjectInputSchema } from './PersonsToProjectsCreateWithoutProjectInputSchema';
import { PersonsToProjectsUncheckedCreateWithoutProjectInputSchema } from './PersonsToProjectsUncheckedCreateWithoutProjectInputSchema';
import { PersonsToProjectsCreateOrConnectWithoutProjectInputSchema } from './PersonsToProjectsCreateOrConnectWithoutProjectInputSchema';
import { PersonsToProjectsCreateManyProjectInputEnvelopeSchema } from './PersonsToProjectsCreateManyProjectInputEnvelopeSchema';
import { PersonsToProjectsWhereUniqueInputSchema } from './PersonsToProjectsWhereUniqueInputSchema';

export const PersonsToProjectsUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.PersonsToProjectsUncheckedCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => PersonsToProjectsCreateWithoutProjectInputSchema),z.lazy(() => PersonsToProjectsCreateWithoutProjectInputSchema).array(),z.lazy(() => PersonsToProjectsUncheckedCreateWithoutProjectInputSchema),z.lazy(() => PersonsToProjectsUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PersonsToProjectsCreateOrConnectWithoutProjectInputSchema),z.lazy(() => PersonsToProjectsCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PersonsToProjectsCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PersonsToProjectsWhereUniqueInputSchema),z.lazy(() => PersonsToProjectsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PersonsToProjectsUncheckedCreateNestedManyWithoutProjectInputSchema;
